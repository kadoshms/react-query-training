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
  return {
      data: {
          pages: []
      }
  }
}

export function useMutateLikeArticle(articleId: string) {
    return
}
