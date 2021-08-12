import * as React from "react";
import { Layout } from "./Layout";

export default {
  title: "Layout",
  component: Layout,
};
const SampleChildren = () => <div>Here is the page content</div>;
const Template = () => <Layout>{SampleChildren}</Layout>;

export const DefaultLayout = Template.bind({});
