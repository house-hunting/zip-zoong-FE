import { DatePicker } from "@/components/DatePicker/DatePicker";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioForm } from "../FormFields/radioForm";
import { SelectForm } from "../FormFields/selectForm/selectForm";
import { floorsNumber, totalFloors } from "../FormFields/selectForm/selectOption";
import { Control, FieldErrors } from "react-hook-form";
import { RegiFormDatas } from "../regiSchema";
import { InputForm } from "../FormFields/inputForm";

type OptionProps = {
  control: Control<RegiFormDatas>;
  errors: FieldErrors<RegiFormDatas>;
};

export const RegiOption: React.FC<OptionProps> = ({ control, errors }) => {
  return (
    <>
      <div className="grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border">
          <div className="font-bold text-sm xs:text-sm sm:text-base">입주 가능 일자</div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="col-span-2 p-3">
            <RadioGroup
              className="flex items-center col-span-3 h-16 mx-3"
              defaultValue="comfortable"
            >
              <RadioForm
                name="selectDate"
                value={false}
                style="flex items-center space-x-2 mr-10 w-24"
                label="즉시 입주"
                control={control}
                errors={errors}
              />
              <RadioForm
                name="selectDate"
                value={true}
                style="flex items-center space-x-2 w-24"
                label="일자 선택"
                control={control}
                errors={errors}
              />
            </RadioGroup>
          </div>
          <div className="flex justify-center items-center md:ml-8 ml-24 mb-5 sm:mb-0">
            <DatePicker name={"datePicker"} control={control} errors={errors} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-t grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border">
          <div className="font-bold text-sm xs:text-sm sm:text-base">층 수</div>
        </div>
        <div className="col-span-3 p-3">
          <div className="flex">
            <div className="mr-5">
              <SelectForm
                name={"totalFloors"}
                title="전체 층 수"
                placeholder="층 수 선택"
                data={totalFloors}
                control={control}
                errors={errors}
              />
            </div>
            <div>
              <SelectForm
                name={"floorsNumber"}
                title="해당 층 수"
                placeholder="해당 층 수 선택"
                data={floorsNumber}
                control={control}
                errors={errors}
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-y border-b-black grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border ">
          <div className="font-bold text-sm xs:text-sm sm:text-base">추가 정보</div>
        </div>
        <div className="w-full col-start-2 col-end-7">
          <div className="grid p-3">
            <span className="font-semibold text-sm xs:text-sm sm:text-base">엘리베이터</span>
            <RadioGroup
              className="flex items-center col-span-3 h-16 mx-3"
              defaultValue="comfortable"
            >
              <RadioForm
                name="elevator"
                value={false}
                style="flex items-center space-x-2 mr-12"
                label="없음"
                control={control}
                errors={errors}
              />
              <RadioForm
                name="elevator"
                value={true}
                style="flex items-center space-x-2"
                label="있음"
                control={control}
                errors={errors}
              />
            </RadioGroup>
          </div>
          {/*  */}
          <div className="grid justify-between border-t p-3">
            <span className="font-semibold text-sm xs:text-sm sm:text-base">주차 가능 여부</span>
            <div className="flex flex-col sm:flex-row items-center">
              <RadioGroup className="flex items-center h-16 mx-3" defaultValue="comfortable">
                <RadioForm
                  name="parking"
                  value={false}
                  style="flex items-center space-x-2 w-24"
                  label="불가능"
                  control={control}
                  errors={errors}
                />
                <RadioForm
                  name="parking"
                  value={true}
                  style="flex items-center space-x-2 w-24"
                  label="가능"
                  control={control}
                  errors={errors}
                />
              </RadioGroup>
              <div className="md:ml-14">
                <InputForm
                  name="parkingCost"
                  control={control}
                  errors={errors}
                  style="border p-2 text-xs xs:text-sm rounded-md text-end"
                  placeholder="0"
                  label="만원"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
