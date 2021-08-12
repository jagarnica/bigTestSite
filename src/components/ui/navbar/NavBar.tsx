import * as React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { Link as GLink } from "gatsby";

export function NavBar() {
  return (
    <Box
      d="flex"
      w="100%"
      p="8px 24px"
      borderBottom="1px"
      borderBottomColor="gray.300"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link
        as={GLink}
        to="/"
        fontWeight="extrabold"
        fontSize="4xl"
        color="blue.800"
      >
        Notely
      </Link>
      <Link
        as={GLink}
        to="/login"
        fontWeight="extrabold"
        fontSize="2xl"
        color="blue.800"
      >
        Login
      </Link>
    </Box>
  );
}
