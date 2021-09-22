import * as React from "react";
import { Button as CButton, ButtonProps } from "@chakra-ui/react";

export function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <CButton fontSize="sm" colorScheme="blue" {...props}>
      {children}
    </CButton>
  );
}
