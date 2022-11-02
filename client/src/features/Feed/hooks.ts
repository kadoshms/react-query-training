import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "react-query";
import { useToast } from "@chakra-ui/react";
import { Article } from "@react-query-training/models";
import { axiosInstance } from "../../api";
import { Filters, useFilters } from "../../providers";

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

export function useFetchFeed() {
  const { filters } = useFilters();
  return useInfiniteQuery<ArticlesResponse>(
    queryKeys.withFilters(filters),
    async ({ pageParam = 0 }) =>
      axiosInstance
        .get("articles", {
          params: { page: pageParam },
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
  const toast = useToast();

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
        toast({
          title: "Like operation failed!",
          status: "error",
        });
        queryClient.setQueryData(queryKeys.feed, context!.previousFeed);
      },
    }
  );
}
