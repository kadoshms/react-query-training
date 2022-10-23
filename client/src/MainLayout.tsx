import React from "react";
import { Flex } from "@chakra-ui/react";
import { Feed, Header } from "./features";

export function MainLayout() {
  return (
    <Flex width="100%" height="100%" justifyContent="center">
      <Flex width={1200} gap={8} flexDirection="column" justifyContent="center">
        <Header />
        <Feed />
      </Flex>
    </Flex>
  );
}
