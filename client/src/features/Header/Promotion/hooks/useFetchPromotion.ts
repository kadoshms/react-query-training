import { Promotion } from "@react-query-training/models";
import {useQuery, UseQueryOptions} from "react-query";
import { axiosInstance } from "../../../../api";

const queryKeys = {
  base: "promotion",
};

export function useFetchPromotion({ options }: { options?: UseQueryOptions<Promotion> } = {}) {
  return useQuery<Promotion>(queryKeys.base, async () => {
    const response = await axiosInstance.get<Promotion>("promotion");
    return response.data;
  }, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options
  });
}
