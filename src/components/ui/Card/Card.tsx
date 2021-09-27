import * as React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export type CardProps = BoxProps;
export function Card({ children, ...rest }: BoxProps): JSX.Element {
  return (
    <Box
      border="1px"
      borderColor="blue.800"
      borderRadius="md"
      boxShadow="md"
      bg="white"
      {...rest}
    >
      {children}
    </Box>
  );
}
