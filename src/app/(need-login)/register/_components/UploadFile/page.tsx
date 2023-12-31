"use client";

import Image from "next/image";
import { ChangeEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RegiFormDatas } from "../regiSchema";
import { UploadImagesType } from "../../page";

type OptionProps = {
  register: UseFormRegister<RegiFormDatas>;
  errors: FieldErrors<RegiFormDatas>;
  setImages: React.Dispatch<React.SetStateAction<UploadImagesType>>;
  images: UploadImagesType;
};

export const UploadFile: React.FC<OptionProps> = ({ register, errors, setImages, images }) => {
  const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = e.target.files;
    const fileArray = Array.from(files);

    //c
    const newImages = Array.from(files, (file) => URL.createObjectURL(file));
    setImages({
      imageFiles: [...images.imageFiles, ...fileArray],
      blob: [...images.blob, ...newImages],
    });
  };

  console.log(images);
  return (
    <div className="border-y border-b-black grid grid-cols-6 justify-between">
      <div className="flex justify-center items-center border">
        <div className="font-bold text-sm xs:text-sm sm:text-base">사진 등록</div>
      </div>
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
        {errors.roomImage && (
          <div className="text-font-error text-xs mt-5">{errors.roomImage.message}</div>
        )}
        {images?.blob.map((imageUrl, index) => (
          <div key={index} className="bg-red-400 ">
            <Image
              id="roomImage"
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};
