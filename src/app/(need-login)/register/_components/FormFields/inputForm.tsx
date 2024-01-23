import { ReactNode } from "react";
import { Control, Controller, FieldErrors, UseFormGetValues } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RegiFormDatas } from "../regiSchema";

type FormData = {
  address: string;
  addressDetail: string;
  roomArea: number;
  deposit: number;
  month: number;
  roomCost: number;
  cost: number;
  parkingCost: number;
  title: string;
};

interface InputProps {
  name: keyof FormData;
  style: string;
  label?: string;
  control: Control<RegiFormDatas>;
  errors?: FieldErrors<FormData>;
  getValues?: UseFormGetValues<RegiFormDatas>;
  disabled?: boolean | string | undefined;
  placeholder?: string;
  children?: ReactNode;
}

export const InputForm: React.FC<InputProps> = ({
  name,
  control,
  disabled,
  label,
  style,
  errors,
  ...children
}) => {
  // const isDisabled = getValues("cost");
  console.log(disabled);
  return (
    <>
      <>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              {...children}
              className={style}
              // disabled={disabled}
            />
          )}
        />
        {label && <span className="ml-2 text-xs xs:text-sm w-6 xs:w-9">{label}</span>}
      </>

      {errors && (
        <div className="text-font-error text-xs">
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </>
  );
};
