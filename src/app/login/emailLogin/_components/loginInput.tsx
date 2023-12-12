import { ReactNode } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export type FormData = {
  email: string;
  password: string;
};

interface InputProps {
  name: keyof FormData;
  type: string;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  placeholder: string;
  children?: ReactNode;
}

export const LoginInput: React.FC<InputProps> = ({ name, control, type, errors, ...children }) => {
  return (
    <div>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input className="border w-full p-3 my-2" type={type} {...field} {...children} />
          )}
        />
      </div>

      {errors && (
        <div className="text-font-error text-xs">
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </div>
  );
};
