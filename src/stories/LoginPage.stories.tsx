import { withLayout } from "./utils";
import LoginPageComponent from "../pages/login";

export default {
  title: "Layout/Login Page",
  component: LoginPageComponent,
};
const Template = () => withLayout(LoginPageComponent);

export const LoginPage = Template.bind({});
