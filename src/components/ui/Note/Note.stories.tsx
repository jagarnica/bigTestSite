import * as React from "react";
import { Note } from "./Note";

export default {
  title: "Note",
  component: Note,
};

const Template = () => <Note />;

export const DefaultNavBar = Template.bind({
  onSubmit: function () {
    console.log("Hit onSubmit");
  },
});
