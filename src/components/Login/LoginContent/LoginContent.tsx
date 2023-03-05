import { StyledDivider } from "../../Utils/Divider/Divider.style";
import { StyledText } from "../../Utils/Text/Text.style";
import { LoginFooter } from "../LoginFooter/LoginFooter";
import LoginForm from "../LoginForm/LoginForm";
import { LoginContentWrapper } from "./LoginContent.style";

const LoginContent = () => {
  return (
    <LoginContentWrapper>
      <StyledText customSize="xxl">Welcome</StyledText>
      <LoginForm />
      <StyledDivider />
      <LoginFooter />
    </LoginContentWrapper>
  );
};

export default LoginContent;
