import { DatePicker } from "@/components/DatePicker/DatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioForm } from "../FormFields/radioForm";
import { Control, FieldErrors, RegisterOptions, SetFieldValue } from "react-hook-form";

// interface InputProps {
//   control: Control<FormData>;
//   errors: FieldErrors<FormData>;
//   register: RegisterOptions;
//   setValue: SetFieldValue<FormData>;
// }
export default function RegiOption({ control, errors, register }: any) {
  return (
    <>
      <div className="grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border">
          <div className="font-bold">입주 가능 일자</div>
        </div>
        <div className="col-span-2 p-3">
          <RadioGroup className="flex items-center col-span-3 h-16 mx-3" defaultValue="comfortable">
            <RadioForm
              name="selectDate"
              value="1"
              style="flex items-center space-x-2 mr-12"
              label="즉시 입주"
              control={control}
              errors={errors}
            />
            <RadioForm
              name="selectDate"
              value="2"
              style="flex items-center space-x-2"
              label="일자 선택"
              control={control}
              errors={errors}
            />
          </RadioGroup>
        </div>
        <div className="flex justify-center items-center">
          <DatePicker />
        </div>
      </div>
      {/*  */}
      <div className="border-t grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border">
          <div className="font-bold">층 수</div>
        </div>
        <div className="col-span-3 p-3">
          <div className="flex">
            <div className="mr-5">
              {/* <span className="font-semibold">전체 층 수</span>
              <div className="my-3">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="층 수 선택" />
                  </SelectTrigger>
                  <SelectContent name="totalFloors" {...register("totalFloors")}>
                    <SelectItem value="1">1층</SelectItem>
                    <SelectItem value="2">2층</SelectItem>
                    <SelectItem value="3">3층</SelectItem>
                    <SelectItem value="4">4층</SelectItem>
                    <SelectItem value="5">5층</SelectItem>
                    <SelectItem value="6">6층</SelectItem>
                    <SelectItem value="7">7층</SelectItem>
                    <SelectItem value="8">8층</SelectItem>
                    <SelectItem value="9">9층</SelectItem>
                    <SelectItem value="10">10층</SelectItem>
                  </SelectContent>
                </Select>
                {errors.totalFloors && (
                  <div className="text-red-500" role="alert">
                    {errors.totalFloors.message}
                  </div>
                )}
              </div> */}
            </div>
            <div>
              <span className="font-semibold">해당 층 수</span>
              <div className="my-3">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="해당 층 수 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0">반지하</SelectItem>
                      <SelectItem value="1">1층</SelectItem>
                      <SelectItem value="2">2층</SelectItem>
                      <SelectItem value="3">3층</SelectItem>
                      <SelectItem value="4">4층</SelectItem>
                      <SelectItem value="5">5층</SelectItem>
                      <SelectItem value="6">6층</SelectItem>
                      <SelectItem value="7">7층</SelectItem>
                      <SelectItem value="8">8층</SelectItem>
                      <SelectItem value="9">9층</SelectItem>
                      <SelectItem value="10">10층</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-y border-b-black grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border ">
          <div className="font-bold">추가 정보</div>
        </div>
        <div className="w-full col-start-2 col-end-7">
          <div className="grid p-3">
            <span className="font-semibold">엘리베이터</span>
            <RadioGroup
              className="flex items-center col-span-3 h-16 mx-3"
              defaultValue="comfortable"
            >
              <RadioForm
                name="elevator"
                value="1"
                style="flex items-center space-x-2 mr-12"
                label="없음"
                control={control}
                errors={errors}
              />
              <RadioForm
                name="elevator"
                value="2"
                style="flex items-center space-x-2"
                label="있음"
                control={control}
                errors={errors}
              />
            </RadioGroup>
          </div>
          {/*  */}
          <div className="grid justify-between border-t p-3">
            <span className="font-semibold">주차 가능 여부</span>
            <div className="flex">
              <RadioGroup className="flex items-center h-16 mx-3" defaultValue="comfortable">
                <RadioForm
                  name="parking"
                  value="1"
                  style="flex items-center space-x-2 w-24"
                  label="불가능"
                  control={control}
                  errors={errors}
                />
                <RadioForm
                  name="parking"
                  value="2"
                  style="flex items-center space-x-2 w-24"
                  label="가능"
                  control={control}
                  errors={errors}
                />
              </RadioGroup>
              <div className="flex items-center ml-14">
                <input className="border p-2 rounded-md" />
                <span className="ml-2">만원</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid p-3 border-t">
            <span className="font-semibold">옵션</span>
            <div className="flex justify-around items-center space-x-2">
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  냉장고
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  세탁기
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  에어컨
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전자레인지
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  옷장
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  책상
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
