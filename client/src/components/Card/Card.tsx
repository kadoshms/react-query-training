import { CenterProps, Box } from "@chakra-ui/react";

export function Card({ children, ...rest }: CenterProps) {
  return (
    <Box
      padding={4}
      borderRadius="8px"
      border="1px solid #f1f1f1"
      {...rest}
    >
      {children}
    </Box>
  );
}
