import * as React from "react";
import {
  Input,
  FormLabel,
  FormControl,
  Box,
  Link,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { Button } from "components/ui/Button";

export default function SignUpPage() {
  return (
    <Box
      w="100%"
      border="1px"
      borderColor="gray.200"
      p="2rem 1.5rem"
      borderRadius="3xl"
      d="flex"
      flexDir="column"
      bg="white"
    >
      <Text mb="2" alignSelf="center" fontSize="4xl" fontWeight="light">
        Sign up for Notely
      </Text>
      <FormControl d="grid" gridGap="8px">
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" placeholder="Username"></Input>
        <FormHelperText>Please enter your username</FormHelperText>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" placeholder="Password" type="password"></Input>
        <FormHelperText>Please enter your password</FormHelperText>
        <Button type="submit">Sign Up</Button>
        <Link as={GatsbyLink} to="/login">
          Already have an account? Log in
        </Link>
      </FormControl>
    </Box>
  );
}
