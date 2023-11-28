"use client";

import Image from "next/image";
import ProfileImg from "/public/기본 프로필 이미지.png";
import { FaCamera } from "react-icons/fa";
import { RefObject, useRef } from "react";

export default function ProfileEdit() {
  const photoInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (photoInput.current) {
      photoInput.current.click();
    }
  };

  return (
    <div className="flex justify-center p-20">
      <div className="p-10 bg-blue-300">
        <Image className=" w-48" src={ProfileImg} alt="profileImg" />
        <div className="bg-primary-200 flex justify-center items-center w-9 h-9 rounded-full">
          <FaCamera color={"white"} onClick={handleClick} />
          <input
            className=" hidden"
            type="file"
            ref={photoInput}
            accept="image/jpg, image/jpeg, image/png"
            multiple
          />
        </div>
      </div>
    </div>
  );
}
