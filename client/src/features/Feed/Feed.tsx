import React from "react";
import { Box, Center, Flex, Spinner } from "@chakra-ui/react";
import { useFetchFeed } from "./hooks";
import { ArticleList } from "./ArticleList";
import { IntersectionObserver } from "../../components";
import { useFilters } from "../../providers";

export function Feed() {
  const { filters } = useFilters();
  const { data, fetchNextPage, isFetchingNextPage, isLoading, isFetching } =
    useFetchFeed({ filters });

  const handleIntersection = () => {
    if (!isFetchingNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return (
    <Center>
      <Flex flexDirection="column">
        <Flex alignItems="center" flexDirection="column" width={900}>
          {data?.pages.map((page, index) => (
            <ArticleList key={index} articles={page.data} />
          ))}
          <Box m={10}>{(isFetchingNextPage || isLoading) && <Spinner />}</Box>
        </Flex>
        <IntersectionObserver onIntersect={handleIntersection} />
      </Flex>
    </Center>
  );
}
