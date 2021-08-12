import * as React from "react";
import { NavBar } from "components/ui/Navbar";
import { Box } from "@chakra-ui/react";
export type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar pos="absolute" top="0" left="0" bg="white" />
      <Box
        d="flex"
        justifyContent="center"
        pt="24"
        bgColor="gray.50"
        minH="100vh"
      >
        <Box maxW="768px" flex="1" mt="2rem" as="main">
          {children}
        </Box>
      </Box>
    </>
  );
}
