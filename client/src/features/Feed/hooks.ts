import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
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
  const toast = useToast();

  return useMutation(
    () =>
      axiosInstance.put(`articles/like/${articleId}`).then((resp) => resp.data),
    {
      retry: true,
      async onSuccess() {
        await queryClient.invalidateQueries({
          predicate(query) {
            return query.queryKey.includes(queryKeys.feed);
          },
        });
      },
      onError: (err, _, context) => {
        toast({
          title: "Like operation failed!",
          status: "error",
        });
      },
    }
  );
}
