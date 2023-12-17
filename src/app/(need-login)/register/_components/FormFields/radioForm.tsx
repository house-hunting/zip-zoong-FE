import { ReactNode } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type FormData = {
  roomType: string;
  roomInfo: string;
  rentType: string;
  cost: string;
  selectDate: string;
  elevator: string;
  parking: string;
};

interface InputProps {
  name: keyof FormData;
  style: string;
  label: string;
  value: string;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  children?: ReactNode;
}

export const RadioForm: React.FC<InputProps> = ({
  name,
  control,
  style,
  value,
  label,
  errors,
  ...children
}) => {
  return (
    <div>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className={style} {...field} {...children}>
              <RadioGroupItem className="text-primary-100" value={value} />
              <Label htmlFor="r1">{label}</Label>
            </div>
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
