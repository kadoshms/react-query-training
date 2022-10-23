import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Box, IconButton, Flex, Heading, Text } from "@chakra-ui/react";
import { Thumbnail } from "./Thumbnail";
import { useMutateLikeArticle } from "../../hooks";
import { Card } from "../../../../components";

interface ArticleProps {
  title: string;
  brief: string;
  image: string;
  id: string;
  likes: number;
}

export function Article({ title, image, id, brief, likes }: ArticleProps) {
  const { mutate, isLoading: isMutating } = useMutateLikeArticle(id);
  return (
    <Card>
      <Flex flexDirection="column">
        <Heading as="h1" size="md" noOfLines={1} mb={4}>
          {title}
        </Heading>
        <Flex>
          <Box mr={4} mt={4} mb={4}>
            <Thumbnail src={image} alt={title} />
          </Box>
          <Text alignItems="center" display="flex">
            {brief}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" alignItems="center" gap={4}>
        <IconButton
          aria-label="like"
          icon={<FontAwesomeIcon icon={faThumbsUp} />}
          onClick={() => mutate()}
          isLoading={isMutating}
        />
        <Text>{likes}</Text>
      </Flex>
    </Card>
  );
}
