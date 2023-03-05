import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema, LoginType } from "../../../schemas/loginSchema";
import { useCallback } from "react";

const loginFormDefaultValues: LoginType = { email: "", password: "" };

export const useLoginForm = () => {
  const methods = useForm<LoginType>({
    defaultValues: loginFormDefaultValues,
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const handleFormSubmit = useCallback(
    ({ email, password }: LoginType) =>
      console.log("email", email, "password", password),
    []
  );

  return {
    handleFormSubmit,
    methods,
  };
};
