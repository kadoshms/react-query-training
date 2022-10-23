import React from "react";
import { Article } from "@react-query-training/models";
import {Box, Flex} from "@chakra-ui/react";
import { Article as ArticleComp } from "./Article";

interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {articles?.map((article) => (
        <Box width="100%" mb={10} key={article.title}>
          <ArticleComp {...article} />
        </Box>
      ))}
    </Flex>
  );
}
