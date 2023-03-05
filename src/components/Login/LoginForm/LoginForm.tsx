import { FormProvider } from "react-hook-form";

import Button from "../../Utils/Button/Button";
import { EInputType } from "../../Utils/Input/Input";
import InputController from "../../Utils/Input/InputController/InputController";
import { useLoginForm } from "../hooks/useLoginForm";
import { FormWrapper, InputWrapper } from "./LoginForm.style";

const LoginForm = () => {
  const { handleFormSubmit, methods } = useLoginForm();

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={methods.handleSubmit(handleFormSubmit)}>
        <InputWrapper>
          <InputController name="email" label="email" type={EInputType.TEXT} />
          <InputController
            name="password"
            label="password"
            type={EInputType.PASSWORD}
          />
        </InputWrapper>
        <Button fullWidth type="submit" text={"Sign in"} />
      </FormWrapper>
    </FormProvider>
  );
};

export default LoginForm;
