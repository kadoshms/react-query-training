import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "react-query";
import { Article } from "@react-query-training/models";
import { axiosInstance } from "../../api";
import { Filters } from "../../providers";

export const queryKeys = {
  feed: "feed",
  withFilters(filters: Filters) {
    return [queryKeys.feed, filters];
  },
};

interface ArticlesResponse {
  nextPage: number;
  data: Article[];
}

export function useFetchFeed({ filters }: { filters: Filters }) {
  return useInfiniteQuery<ArticlesResponse>(
    queryKeys.withFilters(filters),
    async ({ pageParam = 0 }) =>
      axiosInstance
        .get("articles", {
          params: { page: pageParam, ...filters },
        })
        .then((resp) => resp.data),
    {
      getNextPageParam: (data) => data.nextPage,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
}

export function useMutateLikeArticle(articleId: string) {
  const queryClient = useQueryClient();
  return useMutation(
    () =>
      axiosInstance.put(`articles/like/${articleId}`).then((resp) => resp.data),
    {
      onMutate: async () => {
        const previousFeed = queryClient.getQueryData(
          queryKeys.feed
        ) as InfiniteData<ArticlesResponse>;
        const { pages: previousPages } = previousFeed;
        const updatedPages = previousPages.map((page) => {
          const updatedPageData = page.data.map((article) =>
            article.id === articleId
              ? {
                  ...article,
                  likes: article.likes + 1,
                }
              : article
          );

          return {
            ...page,
            data: updatedPageData,
          };
        });

        const updatedFeed = {
          ...previousFeed,
          pages: updatedPages,
        };
        queryClient.setQueryData(queryKeys.feed, updatedFeed);

        return { previousFeed };
      },
      onError: (err, _, context) => {
        console.log(context);
        queryClient.setQueryData(queryKeys.feed, context!.previousFeed);
      },
    }
  );
}
