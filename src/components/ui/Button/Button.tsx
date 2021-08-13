import * as React from "react";
import { Button as CButton, ButtonProps } from "@chakra-ui/react";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <CButton colorScheme="blue" {...props}>
      {children}
    </CButton>
  );
}
