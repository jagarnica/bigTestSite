import * as React from "react";
import { Box, Input, Textarea, SimpleGrid, BoxProps } from "@chakra-ui/react";
import { Button } from "components/ui/Button";
export interface NoteProps extends BoxProps {
  onSubmit?: () => void;
}
export const Note = ({ onSubmit, ...rest }: NoteProps): JSX.Element => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit?.();
  }
  return (
    <Box boxShadow="md" borderRadius="md" bg="white" p="4" {...rest}>
      <form onSubmit={handleSubmit}>
        <SimpleGrid column={1} spacing={10}>
          <Input placeholder="Note Title" />
          <Textarea placeholder="Enter your notes" />
          <Button isFullWidth type="submit">
            Save
          </Button>
        </SimpleGrid>
      </form>
    </Box>
  );
};
