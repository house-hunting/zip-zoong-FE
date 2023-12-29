"use client";

import * as React from "react";
import { ReactNode } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { RegiFormDatas } from "@/app/(need-login)/register/_components/regiSchema";
import { ErrorMessage } from "@hookform/error-message";

type FormData = {
  datePicker?: number | Date;
};

interface InputProps {
  name: keyof FormData;
  control: Control<RegiFormDatas>;
  errors: FieldErrors<FormData>;
  children?: ReactNode;
}
export const DatePicker: React.FC<InputProps> = ({ name, control, errors, ...children }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover {...field} {...children}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />

      {errors && (
        <div className="text-font-error text-xs">
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </div>
  );
};
