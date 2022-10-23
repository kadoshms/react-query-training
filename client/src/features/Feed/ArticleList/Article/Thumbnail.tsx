import { useState } from "react";
import { Flex, Skeleton, Image } from "@chakra-ui/react";

interface ThumbnailProps {
  alt: string;
  src: string;
  size?: number;
}

export function Thumbnail({ alt, src, size = 100 }: ThumbnailProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Flex
      minWidth={size}
      height={size}
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      <Skeleton isLoaded={!isLoading}>
        <Image
          onLoad={() => setIsLoading(false)}
          src={src}
          alt={alt}
          borderRadius="full"
          boxSize={size}
        />
      </Skeleton>
    </Flex>
  );
}
