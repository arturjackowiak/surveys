import { useController, useFormContext } from "react-hook-form";

import { ThemeFontSizesKeysType } from "../../../../styles/fontSizes";
import Input, { EInputType } from "../Input";

interface IInputControllerProps {
  name: string;
  type: EInputType;
  label: string;
  customSize?: ThemeFontSizesKeysType;
}

const InputController = ({
  name,
  type,
  label,
  customSize,
}: IInputControllerProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <Input
      {...field}
      type={type}
      error={error?.message}
      ref={field.ref}
      value={field.value}
      customSize={customSize}
      label={label}
    />
  );
};

export default InputController;
