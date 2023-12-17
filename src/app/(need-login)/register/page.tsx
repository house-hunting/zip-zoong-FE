"use client";

// import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RegiOption from "./_components/RegiOption/page";
import UploadFile from "./_components/UploadFile/page";
import { Header } from "@/components/Header/Header";
import FindAddress from "@/components/Address/Address";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./_components/regiSchema";
import { RadioForm } from "./_components/FormFields/radioForm";

type FormDatas = {
  roomType: string;
  roomInfo: string;
  rentType: string;
  cost: string;
  selectDate: string;
  elevator: string;
  parking: string;
};

export default function Register() {
  const [address, setAddress] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDatas>({ resolver: yupResolver(RegisterSchema) });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };
  return (
    <>
      <Header />
      <form
        className="flex justify-center items-center flex-col p-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="font-bold text-big m-20">내집 내놓기</div>
        <ul className="list-disc flex flex-col w-4/6 ml-10 font-semibold leading-8">
          <li>전/월세 매물만 등록할 수 있습니다.</li>
          <li>임대인과 퇴실 협의 후 작성 해주시길 바랍니다.</li>
          <li>내놓으시려는 집의 계약서를 참고하여 작성하시면 원활하게 작성 가능합니다.</li>
          <li>본인 명의로 계약 된 집이 아닌경우 계약 명의자의 출석이 요구될 수 있습니다.</li>
          <li>금액 및 옵션 등 정확한 정보를 입력 바랍니다.</li>
        </ul>
        <div className="border flex justify-center items-center flex-col w-4/6 mt-5">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-6 justify-between">
              <div className="flex justify-center items-center border ">
                <div className="font-bold">매물 유형</div>
              </div>
              {/* <RadioGroup
                className="flex justify-around items-center col-span-5 h-16"
                defaultValue="comfortable"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="text-primary-100" value="one" id="r1" />
                  <Label htmlFor="r1">원룸</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="text-primary-100" value="two" id="r2" />
                  <Label htmlFor="r2">투룸</Label>
                </div>
              </RadioGroup> */}
              <RadioGroup
                className="flex justify-around items-center col-span-5 h-16"
                defaultValue="comfortable"
              >
                <RadioForm
                  name="roomType"
                  value="1"
                  style="flex justify-around items-center col-span-5 h-16"
                  label="원룸"
                  control={control}
                  errors={errors}
                />
                <RadioForm
                  name="roomType"
                  value="2"
                  style="flex justify-around items-center col-span-5 h-16"
                  label="투룸"
                  control={control}
                  errors={errors}
                />
              </RadioGroup>
            </div>
            {/*  */}
            <div className="border-t grid grid-cols-6 justify-between">
              <div className="flex justify-center items-center border">
                <div className="font-bold">매물 주소</div>
              </div>
              <div className="col-span-3 p-3">
                <span className="font-semibold">주소 검색</span>
                <div className="flex my-3">
                  <input
                    className="border text-sm p-2 rounded-md w-2/3"
                    placeholder="예) 000동 00-0, 00구 00동"
                    value={address}
                  />
                  <FindAddress setter={setAddress} />
                </div>
                <input
                  className="border text-sm p-2 rounded-md w-2/3"
                  placeholder="상세주소 입력"
                />
              </div>
            </div>
            {/*  */}
            <div className="border-y grid grid-cols-6 justify-between border-b-black">
              <div className="flex justify-center items-center border">
                <div className="font-bold">방 정보</div>
              </div>
              <div className="flex items-center justify-between col-span-5 p-3">
                <div>
                  <span className="font-semibold">전용 면적</span>
                  <div className="flex items-center justify-center my-3">
                    <input className=" border p-2 rounded-md" placeholder="평수 입력" />
                    <span className="mx-2">평</span>
                  </div>
                </div>
                <RadioGroup
                  className="flex justify-center items-center w-3/4"
                  defaultValue="comfortable"
                >
                  {/* <div className="flex items-center space-x-2 mx-8">
                    <RadioGroupItem className="text-primary-100" value="open" id="r1" />
                    <Label htmlFor="r1">오픈형</Label>
                  </div>
                  <div className="flex items-center space-x-2 mx-8">
                    <RadioGroupItem className="text-primary-100" value="separation" id="r2" />
                    <Label htmlFor="r2">분리형</Label>
                  </div>
                  <div className="flex items-center space-x-2 mx-8">
                    <RadioGroupItem className="text-primary-100" value="double" id="r3" />
                    <Label htmlFor="r3">복층형</Label>
                  </div> */}
                  <RadioForm
                    name="roomInfo"
                    value="1"
                    style="flex items-center space-x-2 mx-8"
                    label="오픈형"
                    control={control}
                    errors={errors}
                  />
                  <RadioForm
                    name="roomInfo"
                    value="2"
                    style="flex items-center space-x-2 mx-8"
                    label="분리형"
                    control={control}
                    errors={errors}
                  />
                  <RadioForm
                    name="roomInfo"
                    value="3"
                    style="flex items-center space-x-2 mx-8"
                    label="복층형"
                    control={control}
                    errors={errors}
                  />
                </RadioGroup>
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-6 justify-between outline-gray ">
              <div className="flex justify-center items-center border ">
                <div className="font-bold">거래 종류</div>
              </div>
              <RadioGroup
                className="flex items-center col-span-3 h-16 mx-3"
                defaultValue="comfortable"
              >
                {/* <div className="flex items-center space-x-2 mr-12">
                  <RadioGroupItem className="text-primary-100" value="month" id="r1" />
                  <Label htmlFor="r1">월세</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="text-primary-100" value="rent" id="r2" />
                  <Label htmlFor="r2">전세</Label>
                </div> */}
                <RadioForm
                  name="rentType"
                  value="1"
                  style="flex items-center space-x-2 mr-12"
                  label="월세"
                  control={control}
                  errors={errors}
                />
                <RadioForm
                  name="rentType"
                  value="2"
                  style="flex items-center space-x-2 mr-12"
                  label="전세"
                  control={control}
                  errors={errors}
                />
              </RadioGroup>
            </div>
            {/*  */}
            <div className="border-y grid grid-cols-6 justify-between border-b-black">
              <div className="flex justify-center items-center border">
                <div className="font-bold">가격 정보</div>
              </div>
              <div className="col-span-3 p-3">
                <div className="flex">
                  <div className="mr-5">
                    <span className="font-semibold">보증금</span>
                    <div className="my-3">
                      <input className="border p-2 rounded-md" />
                      <span className="ml-2">만원</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold">월세</span>
                    <div className="my-3">
                      <input className="border p-2 rounded-md" />
                      <span className="ml-2">만원</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">관리비 여부</span>
                  <div className="flex">
                    <RadioGroup
                      className="flex items-center col-span-3 h-16 mx-3"
                      defaultValue="comfortable"
                    >
                      {/* <div className="flex items-center space-x-2 mr-12">
                        <RadioGroupItem className="text-primary-100" value="false" id="r1" />
                        <Label htmlFor="r1">없음</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem className="text-primary-100" value="true" id="r2" />
                        <Label htmlFor="r2">있음</Label>
                      </div> */}
                      <RadioForm
                        name="cost"
                        value="1"
                        style="flex items-center space-x-2 mr-12"
                        label="없음"
                        control={control}
                        errors={errors}
                      />
                      <RadioForm
                        name="cost"
                        value="2"
                        style="flex items-center space-x-2"
                        label="있음"
                        control={control}
                        errors={errors}
                      />
                    </RadioGroup>
                    <div className="flex items-center ml-20">
                      <input className="border p-2 rounded-md" />
                      <span className="ml-2">만원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <RegiOption control={control} errors={errors} />
            <UploadFile />
            {/*  */}
            <div className="grid grid-cols-6 justify-between">
              <div className="flex justify-center items-center border">
                <div className="font-semibold">상세 설명</div>
              </div>
              <div className="col-span-5 p-3">
                <span className="font-semibold">제목</span>
                <div className="flex my-3 w-full">
                  <input
                    className="border text-sm p-3 rounded-md w-2/3"
                    placeholder="리스트에 노출되는 문구입니다. 40자 이내로 작성해 주세요."
                  />
                </div>
                <span className="font-semibold">내용</span>
                <textarea
                  className="w-full border rounded-md p-3 h-60"
                  placeholder="매물 상세 페이지에 노출되는 문구입니다. 1000자 이내로 작성해 주세요."
                ></textarea>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <button className="mt-5 bg-primary-200 text-white w-48 h-12 rounded-md font-semibold hover:bg-hover">
          매물 등록
        </button>
      </form>
    </>
  );
}
