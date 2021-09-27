import * as React from "react";
import { Text, Box } from "@chakra-ui/react";
import { Note, UserNote } from "components/ui/Note";
// markup
const SampleNote: UserNote = {
  title: "Go Shopping for New Dutch Oven",
  description:
    "Go to Williams Sonoma or something to buy a dutch oven. Maybe a teal one?",
};
const IndexPage = (): JSX.Element => {
  const savedNotes = [SampleNote];
  return (
    <>
      <Text fontSize="3xl" color="blue.800" as="p">
        {`Welcome to Notely. The world's worst note taking app.`}
      </Text>
      <Text mt="8" fontSize="2xl" color="blue.800" as="p">
        My previous notes:
      </Text>
      <Box mt="2" mb="2">
        {savedNotes && savedNotes.length > 0 ? (
          savedNotes.map((note, index) => (
            <Note initialValue={note} key={index} readOnly />
          ))
        ) : (
          <Text>You have no saved notes yet!</Text>
        )}
      </Box>
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
