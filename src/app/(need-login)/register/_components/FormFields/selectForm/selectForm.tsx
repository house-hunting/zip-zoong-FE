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
  label: string;
  placeholder: string;
  value: string;
  data: SelectOption[];
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  children?: ReactNode;
}

export const SelectForm: React.FC<InputProps> = ({
  name,
  control,
  title,
  value,
  data,
  label,
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
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {data.map((el, idx) => (
                    <SelectItem key={idx} value={el.value}>
                      {el.floor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      />

      <SelectContent>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <SelectItem {...field} {...children} value={value}>
              {label}
            </SelectItem>
          )}
        />
      </SelectContent>

      {errors && (
        <div className="text-font-error text-xs">
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </>
  );
};
