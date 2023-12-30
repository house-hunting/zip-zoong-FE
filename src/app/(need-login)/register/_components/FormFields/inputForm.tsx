import { ReactNode } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
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
  placeholder: string;
  children?: ReactNode;
}

export const InputForm: React.FC<InputProps> = ({
  name,
  control,
  label,
  style,
  errors,
  ...children
}) => {
  return (
    <>
      <>
        <Controller
          name={name}
          control={control}
          render={({ field }) => <input className={style} {...field} {...children} />}
        />
        {label && <span className="ml-2">{label}</span>}
      </>

      {errors && (
        <div className="text-font-error text-xs">
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </>
  );
};
