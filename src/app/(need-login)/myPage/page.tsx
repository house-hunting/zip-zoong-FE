"use client";

import Image from "next/image";
import ProfileImg from "/public/기본 프로필 이미지.png";
import { FaCamera } from "react-icons/fa";
import { RefObject, useRef } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileEdit() {
  const photoInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (photoInput.current) {
      photoInput.current.click();
    }
  };

  return (
    <form className="flex justify-center items-center flex-col p-20">
      <div className="flex justify-center items-center flex-col w-3/2">
        <div className="p-10 relative">
          <Image className=" w-48" src={ProfileImg} alt="profileImg" />
          <div className="bg-primary-200 flex justify-center items-center w-9 h-9 rounded-full absolute bottom-12 right-12 bot cursor-pointer">
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
        <div className="flex justify-center items-center flex-col w-full">
          <div className="grid grid-cols-5 w-full max-w-sm items-center gap-3.5 m-3">
            <Label className="font-bold w-24" htmlFor="email">
              이메일 주소
            </Label>
            <Input className="col-span-4" type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid grid-cols-5 w-full max-w-sm items-center gap-3.5 m-3">
            <Label className="font-bold w-24" htmlFor="email">
              닉네임
            </Label>
            <Input className="col-span-3" type="email" id="email" placeholder="Email" />
            <button className="bg-primary-200 text-white h-11 text-sm rounded-md">중복검사</button>
          </div>
          <div className="grid grid-cols-5 w-full max-w-sm items-center gap-3.5 m-3">
            <Label className="font-bold w-24" htmlFor="email">
              휴대폰 번호
            </Label>
            <Input className="col-span-4" type="email" id="email" placeholder="Email" />
          </div>
          <div className="flex justify-center items-center bg-primary-200 mt-32 w-11/12 h-10 rounded-md">
            <button className="text-white">저장하기</button>
          </div>
        </div>
      </div>
    </form>
  );
}
