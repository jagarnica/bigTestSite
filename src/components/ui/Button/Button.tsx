import * as React from "react";
import { Button as CButton, ButtonProps } from "@chakra-ui/react";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <CButton padding="16px 8px" colorScheme="facebook" {...props}>
      {children}
    </CButton>
  );
}
