import * as React from "react";
import HomePageComponent from "../pages/index";
import { withLayout } from "./utils";
export default {
  title: "Layout/Home Page",
  component: HomePageComponent,
};
const Template = () => withLayout(HomePageComponent);

export const HomePageUnauthenticated = Template.bind({});
