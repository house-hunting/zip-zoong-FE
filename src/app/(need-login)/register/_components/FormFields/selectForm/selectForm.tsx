import { ReactNode } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  totalFloors: string;
  floorsNumber: string;
};

type SelectOption = {
  floor?: string;
  value?: string;
};

interface InputProps {
  name: keyof FormData;
  title: string;
  placeholder: string;
  data: SelectOption[];
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  children?: ReactNode;
}

export const SelectForm: React.FC<InputProps> = ({
  name,
  control,
  title,
  data,
  placeholder,
  errors,
  ...children
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <span className="font-semibold">{title}</span>
            <div className="my-3">
              <Select {...field} {...children}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {data.map((el, idx) => (
                    <SelectItem key={idx} value={el.value as string}>
                      {el.floor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      />

      {errors && (
        <div className="text-font-error text-xs">
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </>
  );
};
