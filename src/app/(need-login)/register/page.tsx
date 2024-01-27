"use client";

import { RadioGroup } from "@/components/ui/radio-group";
import FindAddress from "@/components/Address/Address";
import { ChangeEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegiFormDatas, RegisterSchema } from "./_components/regiSchema";
import { RadioForm } from "./_components/FormFields/radioForm";
import { RegiOption } from "./_components/RegiOption/page";
import { InputForm } from "./_components/FormFields/inputForm";
import { UploadFile } from "./_components/UploadFile/page";
import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/navigation";

// type ImageType = {
//   url: string;
// };
// export interface UploadImagesType {
//   // imageFiles: File[];
//   create: ImageType[];
// }

export type UploadImagesType = {url: string }[];

export default function Register() {
  const [address, setAddress] = useState<string>("");
  const [images, setImages] = useState<UploadImagesType>(
    // imageFiles: [],
    []
  );
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    handleSubmit,
    control,
    register,
    watch,
    getValues,
    formState: { errors },
  } = useForm<RegiFormDatas>({ resolver: yupResolver(RegisterSchema) });
  const router = useRouter();

  const onSubmit = async (data: RegiFormDatas) => {
    alert(JSON.stringify(data));
    console.log(data);
    console.log("try outside");
    try {
      const formData = new FormData();

      formData.append("roomType", data.roomType);
      formData.append("address", data.address);
      formData.append("addressDetail", data.addressDetail);
      formData.append("roomArea", data.roomArea.toString());
      formData.append("roomInfo", data.roomInfo);

      formData.append("rentType", data.rentType);
      formData.append("deposit", data.deposit.toString());
      formData.append("month", data.month.toString());
      formData.append("cost", data.cost.toString());
      formData.append("roomCost", data.roomCost.toString());

      formData.append("selectDate", data.selectDate.toString());
      formData.append("datePicker", data.datePicker.toString());

      formData.append("totalFloors", data.totalFloors);
      formData.append("floorsNumber", data.floorsNumber);

      formData.append("elevator", data.elevator.toString());
      formData.append("parking", data.parking.toString());
      formData.append("parkingCost", data.parkingCost.toString());
      formData.append("title", data.title);
      formData.append("textArea", data.textArea);

      uploadedFiles.forEach((file) => {
        formData.append("roomImage", file);
      });

      console.log(data.roomImage);

      // for (let element of data.roomImage) {
      //   formData.append("image", element);
      // }

      for (let x of formData.entries()) {
        console.log(x);
      }

      // data.roomImage.forEach((element: ) => {
      //   formData.append("images", element);
      // });

      // if (images) {
      //   images.imageFiles.forEach((image) => formData.append("roomImage", image));
      // } else {
      //   return;
      // }

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/board/uploadBoard`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("게시글 업로드에 실패하셨습니다");
      }

      const result = await res.json();
      console.log('result:', result);

      // setImages(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="flex justify-center items-center flex-col md:p-20 mb-20"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex w-full xs:hidden pt-16 pl-6" onClick={() => router.back()}>
          <MdArrowBackIosNew size={30} />
        </div>
        <div className="font-bold text-big m-20">내집 내놓기</div>
        <ul className="list-disc flex flex-col lg:w-5/6 xl:w-4/6 md:w-5/6 w-11/12 sm:ml-10 font-semibold leading-8 ml-7 text-xs xs:text-base">
          <li>전/월세 매물만 등록할 수 있습니다.</li>
          <li>임대인과 퇴실 협의 후 작성 해주시길 바랍니다.</li>
          <li>내놓으시려는 집의 계약서를 참고하여 작성하시면 원활하게 작성 가능합니다.</li>
          <li>본인 명의로 계약 된 집이 아닌경우 계약 명의자의 출석이 요구될 수 있습니다.</li>
          <li>금액 및 옵션 등 정확한 정보를 입력 바랍니다.</li>
        </ul>
        <div className="border flex justify-center items-center flex-col mt-5 w-11/12 lg:w-5/6 xl:w-4/6">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-6 justify-between">
              <div className="flex justify-center items-center border ">
                <div className="font-bold text-sm xs:text-sm sm:text-base">매물 유형</div>
              </div>
              <RadioGroup
                className="flex justify-around items-center col-span-5 h-16"
                defaultValue="comfortable"
              >
                <RadioForm
                  name="roomType"
                  value="one"
                  style="flex justify-around items-center col-span-5 h-16"
                  label="원룸"
                  control={control}
                  errors={errors}
                />
                <RadioForm
                  name="roomType"
                  value="two"
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
                <div className="font-bold text-sm xs:text-sm sm:text-base">매물 주소</div>
              </div>
              <div className="lg:col-span-3 col-span-5 p-3">
                <span className="font-semibold text-sm xs:text-sm sm:text-base">주소 검색</span>
                <div className="flex mt-3">
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          className="border text-xs xs:text-sm p-2 rounded-md w-2/3"
                          placeholder="예) 000동 00-0, 00구 00동"
                          readOnly
                          type="text"
                          value={address}
                        />
                        <FindAddress
                          setter={(newAddress) => {
                            setAddress(newAddress);
                            field.onChange(newAddress);
                          }}
                        />
                      </>
                    )}
                  />
                </div>
                {errors.address && (
                  <div className="text-font-error text-xs flex flex-col mb-3">
                    {errors.address.message}
                  </div>
                )}
                <InputForm
                  name="addressDetail"
                  control={control}
                  errors={errors}
                  style="border p-2 rounded-md w-2/3 text-xs xs:text-sm mt-2"
                  placeholder="상세주소 입력"
                />
              </div>
            </div>
            {/*  */}
            <div className="border-y grid grid-cols-6 justify-between border-b-black">
              <div className="flex justify-center items-center border">
                <div className="font-bold text-sm xs:text-sm sm:text-base">방 정보</div>
              </div>
              <div className="flex flex-col col-span-5 p-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <span className="font-semibold text-sm xs:text-sm sm:text-base">전용 면적</span>
                  <div className="my-3">
                    <InputForm
                      name="roomArea"
                      control={control}
                      errors={errors}
                      style="border p-2 rounded-md text-end text-xs xs:text-sm w-32 xs:w-44"
                      placeholder="평수 입력"
                      label="평"
                    />
                  </div>
                </div>
                <RadioGroup
                  className="flex sm:justify-center col-span-3 items-center w-full sm:w-3/4"
                  defaultValue="comfortable"
                >
                  <RadioForm
                    name="roomInfo"
                    value="open"
                    style="flex items-center space-x-2 mx-4 sm:mx-8 w-3/4"
                    label="오픈형"
                    control={control}
                    errors={errors}
                  />
                  <RadioForm
                    name="roomInfo"
                    value="detachable"
                    style="flex items-center space-x-2 mx-4 sm:mx-8 w-3/4"
                    label="분리형"
                    control={control}
                    errors={errors}
                  />
                  <RadioForm
                    name="roomInfo"
                    value="layerd"
                    style="flex items-center space-x-2 mx-4 sm:mx-8 w-3/4"
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
                <div className="font-bold text-sm xs:text-sm sm:text-base">거래 종류</div>
              </div>
              <RadioGroup
                className="flex items-center col-span-3 h-16 mx-3"
                defaultValue="comfortable"
              >
                <RadioForm
                  name="rentType"
                  value="month"
                  style="flex items-center space-x-2 xs:mr-12 w-20"
                  label="월세"
                  control={control}
                  errors={errors}
                />
                <RadioForm
                  name="rentType"
                  value="year"
                  style="flex items-center space-x-2 w-20"
                  label="전세"
                  control={control}
                  errors={errors}
                />
              </RadioGroup>
            </div>
            {/*  */}
            <div className="border-y grid grid-cols-6 justify-between border-b-black">
              <div className="flex justify-center items-center border">
                <div className="font-bold text-sm xs:text-sm sm:text-base">가격 정보</div>
              </div>
              <div className="col-span-3 p-3">
                <div className="flex">
                  <div className="mr-5">
                    <span className="font-semibold text-sm xs:text-sm sm:text-base">보증금</span>
                    <div className="my-3 flex items-center">
                      <InputForm
                        name="deposit"
                        control={control}
                        errors={errors}
                        style="border p-2 text-xs xs:text-sm rounded-md text-end w-24 xs:w-32 sm:w-auto"
                        placeholder="0"
                        label="만원"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-sm xs:text-sm sm:text-base">월세</span>
                    <div className="my-3 flex items-center">
                      <InputForm
                        name="month"
                        control={control}
                        errors={errors}
                        style="border p-2 text-xs xs:text-sm rounded-md text-end w-24 xs:w-32 sm:w-auto"
                        placeholder="0"
                        label="만원"
                        disabled={getValues("cost")}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-sm xs:text-sm sm:text-base">관리비 여부</span>
                  <div className="flex flex-col sm:flex-row">
                    <RadioGroup
                      className="flex items-center col-span-3 h-16 mx-3"
                      defaultValue="comfortable"
                    >
                      <RadioForm
                        name="cost"
                        value={false}
                        style="flex items-center space-x-2 xs:mr-10 w-20"
                        label="없음"
                        control={control}
                        errors={errors}
                        // onChange={handleRadioChange}
                      />
                      <RadioForm
                        name="cost"
                        value={true}
                        style="flex items-center space-x-2 w-20"
                        label="있음"
                        control={control}
                        errors={errors}
                        // onChange={handleRadioChange}
                      />
                    </RadioGroup>
                    <div className="md:ml-18 lg:ml-20 flex items-center">
                      <InputForm
                        name="roomCost"
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
            {/*  */}
            <RegiOption control={control} errors={errors} />
            <UploadFile
              register={register}
              errors={errors}
              setImages={setImages}
              setUploadedFiles={setUploadedFiles}
              images={images}
              // setValue={setValue}
            />
            {/*  */}
            <div className="grid grid-cols-6 justify-between">
              <div className="flex justify-center items-center border">
                <div className="font-semibold text-sm xs:text-sm sm:text-base">상세 설명</div>
              </div>
              <div className="col-span-5 p-3">
                <span className="font-semibold text-sm xs:text-sm sm:text-base">제목</span>
                <div className="my-3 w-full">
                  <InputForm
                    name="title"
                    control={control}
                    errors={errors}
                    style="border text-xs xs:text-sm p-3 rounded-md w-full md:w-2/3 mb-2"
                    placeholder="리스트에 노출되는 문구입니다. 40자 이내로 작성해 주세요."
                  />
                </div>
                <span className="font-semibold text-sm xs:text-sm sm:text-base">내용</span>
                <textarea
                  className="w-full border rounded-md p-3 h-60 text-xs xs:text-sm"
                  placeholder="매물 상세 페이지에 노출되는 문구입니다. 1000자 이내로 작성해 주세요."
                  {...register("textArea")}
                ></textarea>
                {errors.textArea && (
                  <div className="text-font-error text-xs">{errors.textArea.message}</div>
                )}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <button className="mt-5 bg-primary-200 text-sm xs:text-base text-white w-36 md:w-48 h-12 rounded-md font-semibold hover:bg-hover">
          매물 등록
        </button>
      </form>
    </>
  );
}
