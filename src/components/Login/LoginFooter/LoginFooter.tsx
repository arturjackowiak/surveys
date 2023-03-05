import Button from "../../Utils/Button/Button";
import { LoginFooterWrapper } from "./LoginFooter.style";

export const LoginFooter = () => (
  <LoginFooterWrapper>
    <Button text="Forgot password" fullWidth />
    <Button text="Sign up" fullWidth />
  </LoginFooterWrapper>
);
