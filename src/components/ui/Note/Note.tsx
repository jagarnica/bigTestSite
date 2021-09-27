import * as React from "react";
import { Input, Textarea, SimpleGrid, BoxProps } from "@chakra-ui/react";
import { Button } from "components/ui/Button";
import { Card } from "components/ui/Card";
export interface NoteProps extends BoxProps {
  onSubmit?: () => void;
}
export const Note = ({ onSubmit, ...rest }: NoteProps): JSX.Element => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit?.();
  }
  return (
    <Card p="4" {...rest}>
      <form onSubmit={handleSubmit}>
        <SimpleGrid column={1} spacing={10}>
          <Input placeholder="Note Title" />
          <Textarea placeholder="Enter your notes" />
          <Button isFullWidth type="submit">
            Save
          </Button>
        </SimpleGrid>
      </form>
    </Card>
  );
};
