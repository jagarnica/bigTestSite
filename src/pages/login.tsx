import * as React from "react";
import { Input, FormLabel, FormControl, Box } from "@chakra-ui/react";
import { Button } from "components/ui/Button";
export default function LoginPage() {
  return (
    <Box w="100%">
      Welcome to the login page
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Username"></Input>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Password" type="password"></Input>
        <Button type="submit">Login</Button>
      </FormControl>
    </Box>
  );
}
