"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RegiFormDatas } from "../regiSchema";

interface UploadImagesType {
  imageFiles: File[];
  blob: string[];
}

type OptionProps = {
  register: UseFormRegister<RegiFormDatas>;
  errors: FieldErrors<RegiFormDatas>;
};
export const UploadFile: React.FC<OptionProps> = ({ register, errors }) => {
  const [uploadImages, setUploadImages] = useState<UploadImagesType>({
    imageFiles: [],
    blob: [],
  });

  useEffect(() => {
    return () => {
      uploadImages.blob.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [uploadImages]);

  const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; // a
    const files: FileList = e.target.files;

    const imageBlobs = [...uploadImages.blob];
    const imageFile = Array.from(files).map((file) => {
      const imageUrl = window.URL.createObjectURL(file);
      imageBlobs.unshift(imageUrl);
      return file; //file 데이터
    });

    setUploadImages({ imageFiles: imageFile, blob: imageBlobs });
  };
  return (
    <div className="border-y border-b-black grid grid-cols-6 justify-between">
      <div className="flex justify-center items-center border">
        <div className="font-bold">사진 등록</div>
      </div>
      <div className="col-span-2 p-5">
        <label htmlFor="fileInput" className="cursor-pointer p-2 rounded-md bg-black text-white">
          + 사진 추가
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            {...register("roomImage")}
            onChange={onImageUpload}
          />
        </label>
        {errors.roomImage && (
          <div className="text-font-error text-xs mt-5">{errors.roomImage.message}</div>
        )}
        {uploadImages.blob.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            // style={{ maxWidth: "100px", maxHeight: "100px", margin: "5px" }}
            className=" w-16 h-16"
          />
        ))}
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};
