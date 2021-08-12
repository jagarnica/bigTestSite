import React from "react";
import { ButtonProps } from "@chakra-ui/react";
import { Button } from "./";

export default {
  title: "Button",
  component: Button,
  args: {},
};

const Template = (props: ButtonProps) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.arguments = {
  className: "",
};
export const PrimaryHovered = Template.bind({});
Primary.arguments = {
  className: "hover",
};
