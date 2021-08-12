import { withLayout } from "./utils";
import SignUpPageComponent from "../pages/signup";

export default {
  title: "Layout/Sign Up Page",
  component: SignUpPageComponent,
};
const Template = () => withLayout(SignUpPageComponent);

export const SignUpPage = Template.bind({});
