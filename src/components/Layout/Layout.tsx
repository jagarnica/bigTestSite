import * as React from "react";
import { NavBar } from "components/ui/Navbar";
import { Box } from "@chakra-ui/react";
export type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <Box d="flex" justifyContent="center">
        <Box maxW="768px" mt="2rem" as="main">
          {children}
        </Box>
      </Box>
    </>
  );
}
