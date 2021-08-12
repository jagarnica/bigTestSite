import * as React from "react";
import {
  Input,
  FormLabel,
  FormControl,
  Box,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import { Button } from "components/ui/Button";
export default function LoginPage() {
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
        Login in to Notely
      </Text>
      <FormControl d="grid" gridGap="8px">
        <FormLabel>Username</FormLabel>
        <Input placeholder="Username"></Input>
        <FormHelperText>Please enter your username</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Password" type="password"></Input>
        <FormHelperText>Please enter your password</FormHelperText>
        <Button type="submit">Login</Button>
      </FormControl>
    </Box>
  );
}
