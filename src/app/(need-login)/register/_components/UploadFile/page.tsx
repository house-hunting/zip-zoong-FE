"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { RegiFormDatas } from "../regiSchema";
import { UploadImagesType } from "../../page";

type OptionProps = {
  register: UseFormRegister<RegiFormDatas>;
  errors: FieldErrors<RegiFormDatas>;
  setImages: React.Dispatch<React.SetStateAction<UploadImagesType>>;
  images: UploadImagesType;
  // setValue: UseFormSetValue<FieldValues>;
};

export const UploadFile: React.FC<OptionProps> = ({
  register,
  errors,
  setImages,
  images,
  // setValue,
}) => {
  const [imgSrc, setImgSrc] = useState<string[]>([]);
  const [uploaded, setUploaded] = useState<File[]>([]);

  const onImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = e.target.files;
    // const fileArray = Array.from(files);

    //c
    console.log(typeof images);
    const newImages = Array.from(files, (file) => ({ url: URL.createObjectURL(file) }));

    // setImages((prevImages) => ({ create: [...prevImages.create, ...newImages] }));
    setImages((prevImages) => ({
      roomImage: {
        create: [...prevImages.roomImage.create, ...newImages],
      },
    }));

    console.log(newImages);
  };

  // console.log(uploaded);

  // useEffect(() => {
  //   setValue("roomImage", uploaded);
  // }, [images]); // useEffect를 사용하여 images가 변경될 때마다 로그를 출력

  return (
    <div className="border-y border-b-black grid grid-cols-6 justify-between">
      <div className="flex justify-center items-center border">
        <div className="font-bold text-sm xs:text-sm sm:text-base">사진 등록</div>
      </div>
      <div className="flex flex-col col-span-5">
        <div className="col-span-2 p-5">
          <label
            htmlFor="roomImage"
            className="cursor-pointer p-2 rounded-md bg-black text-white text-xs xs:text-sm"
          >
            + 사진 추가
            <input
              type="file"
              id="roomImage"
              multiple
              style={{ display: "none" }}
              accept="image/*"
              {...register("roomImage")}
              onChange={(e) => {
                register("roomImage").onChange(e);
                onImageUpload(e);
              }}
            />
          </label>
          {/* {errors.roomImage && (
            <div className="text-font-error text-xs mt-5">{errors.roomImage.message}</div>
          )} */}
        </div>
        <div className="mt-5 flex flex-wrap">
          {images?.roomImage.create.map((imageUrl, index) => (
            <div key={index} className="mr-2">
              <Image
                id="roomImage"
                key={index}
                src={imageUrl.url}
                alt={`Image ${index + 1}`}
                width={150}
                height={150}
                // style={{ objectFit: "fill" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
