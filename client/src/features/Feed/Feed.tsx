import React from "react";
import { Center, Flex } from "@chakra-ui/react";
import { IntersectionObserver } from "../../components";

export function Feed() {
  const handleIntersection = () => {
    console.log('should load more');
  };

  return (
    <Center>
      <Flex flexDirection="column">
        <Flex alignItems="center" flexDirection="column" width={900}>
          {/*{data?.pages.map((page, index) => (*/}
          {/*  <ArticleList key={index} articles={page.data} />*/}
          {/*))}*/}
          {/*<Box m={10}>{(isFetchingNextPage || isLoading) && <Spinner />}</Box>*/}
        </Flex>
        <IntersectionObserver onIntersect={handleIntersection} />
      </Flex>
    </Center>
  );
}
