import React from "react";
import { Card, CardProps } from "./Card";

export default {
  title: "Card",
  component: Card,
  args: {},
};

const Template = (props: CardProps) => <Card {...props} />;

export const CardPrimary = Template.bind({});
