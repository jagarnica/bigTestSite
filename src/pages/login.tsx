import * as React from "react";
import {
  Input,
  FormLabel,
  FormControl,
  Box,
  Text,
  FormHelperText,
  Link,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { Button } from "components/ui/Button";
import { Card } from "components/ui/Card";

export default function LoginPage(): JSX.Element {
  return (
    <Card p="2rem 1.5rem" d="flex" flexDir="column">
      <Text mb="2" alignSelf="center" fontSize="4xl" fontWeight="light">
        Login in to Notely
      </Text>
      <FormControl d="grid" gridGap="8px">
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" placeholder="Username"></Input>
        <FormHelperText>Please enter your username</FormHelperText>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" placeholder="Password" type="password"></Input>
        <FormHelperText>Please enter your password</FormHelperText>
        <Button type="submit">Login</Button>
        <Link as={GatsbyLink} to="/signup">
          Sign up for an account
        </Link>
      </FormControl>
    </Card>
  );
}
