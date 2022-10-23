import React from "react";
import { useFetchPromotion } from "./hooks";
import { Card } from "../../../components";
import { Button, Flex, Skeleton, Text } from "@chakra-ui/react";

interface PromotionProps {
  onClose(event?: React.MouseEvent): void;
}

export function Promotion({ onClose }: PromotionProps) {
  const { data: promotion, isLoading } = useFetchPromotion();
  return (
    <Card>
      <Skeleton isLoaded={!isLoading} startColor="white" endColor="#f1f1f1">
        <Flex justifyContent="space-between">
          <Text fontSize="xl">{promotion?.description}</Text>
          <Button onClick={onClose}>hide</Button>
        </Flex>
      </Skeleton>
    </Card>
  );
}
