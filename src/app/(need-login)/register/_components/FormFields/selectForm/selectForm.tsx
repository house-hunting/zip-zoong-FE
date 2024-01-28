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
import { RegiFormDatas } from "../../regiSchema";

type FormData = {
  totalfloor: string;
  floorsNumber: string;
};

type SelectOption = {
  floor?: string;
  value?: string;
};

interface SelectProps {
  name: keyof FormData;
  title: string;
  placeholder: string;
  data: SelectOption[];
  control: Control<RegiFormDatas>;
  errors: FieldErrors<FormData>;
  children?: ReactNode;
}

export const SelectForm: React.FC<SelectProps> = ({
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
            <span className="font-semibold text-sm sm:text-base">{title}</span>
            <div className="my-3">
              <Select
                {...field}
                {...children}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="text-xs xs:text-sm w-28 xs:w-36">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {data.map((el, idx) => (
                    <SelectItem key={idx} value={el.value || ""}>
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
