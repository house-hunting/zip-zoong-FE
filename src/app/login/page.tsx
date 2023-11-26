"use client";

import Image from "next/image";
import logo from "/public/집중 메인로고.png";
import { useRouter } from "next/navigation";
import kakaoIcon from "../../../public/kakaoIcon.png";

export default function KakaoLogin() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login/emailLogin");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border w-25 flex justify-center items-center rounded-md p-5 flex-col px-9">
        <Image className=" w-1/2 py-2" src={logo} alt="logo" />
        <div className="flex flex-col items-center text-md py-3">
          <span>간편하게 로그인 하고</span>
          <span className=" font-extraBold">다양한 서비스를 즐기세요.</span>
        </div>
        <div className="flex justify-center items-center w-5/6 h-11 rounded-full bg-kakao mt-6 cursor-grab">
          <Image src={kakaoIcon} alt="kakaoIcon" className=" w-7 mr-3" />
          <span>카카오톡으로 시작</span>
        </div>
        <button className="text-xs text-font-gray100 mt-36 mb-4 font-bold" onClick={handleClick}>
          이메일로 시작하기
        </button>
      </div>
    </div>
  );
}
