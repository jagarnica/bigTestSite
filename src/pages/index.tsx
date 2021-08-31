import * as React from "react";
import { Text } from "@chakra-ui/react";
import { Note } from "components/ui/Note";
// markup
const IndexPage = () => {
  return (
    <>
      <Text fontSize="3xl" color="blue.800" as="p">
        Welcome to Notely. The world's worst note taking app.
      </Text>
      <Text mt="8" fontSize="2xl" color="blue.800" as="p">
        My previous notes:
      </Text>
      <Note
        mt="4"
        onSubmit={() => {
          console.log("Saved note");
        }}
      />
    </>
  );
};

export default IndexPage;
