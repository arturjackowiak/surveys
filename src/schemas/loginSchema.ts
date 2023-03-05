import { object, string, InferType } from "yup";

export const loginSchema = object({
  email: string()
    .email()
    .required("This field is mandatory."),
  password: string()
    .required("This field is mandatory."),
}).required();

export type LoginType = InferType<typeof loginSchema>;
