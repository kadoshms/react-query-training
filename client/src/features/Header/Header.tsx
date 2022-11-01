import React, { useState } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Promotion } from "./Promotion";
import { Weather } from "./Weather";
import { OnlineUsers } from "./OnlineUsers";
import { Filters } from "./Filters";

export function Header() {
  const [isPromotionVisible, setIsPromotionVisible] = useState(true);

  return (
    <Flex flexDirection="column" gap={4}>
      <Heading>Bridgecrew News</Heading>
      {isPromotionVisible ? (
        <Promotion onClose={() => setIsPromotionVisible(false)} />
      ) : (
        <Flex justifyContent="flex-end">
          <Button onClick={() => setIsPromotionVisible(true)}>
            Show Promotion
          </Button>
        </Flex>
      )}
      <OnlineUsers />
      <Weather />
      <Filters />
    </Flex>
  );
}
