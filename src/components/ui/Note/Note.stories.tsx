import * as React from "react";
import { Note as NoteComponent } from "./Note";

export default {
  title: "Note",
  component: NoteComponent,
};

const Template = () => <NoteComponent />;

export const Note = Template.bind({
  onSubmit: function () {
    console.log("Hit onSubmit");
  },
});
