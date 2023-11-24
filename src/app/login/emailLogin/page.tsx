"use client";

import Image from "next/image";
import logo from "/public/집중 메인로고.png";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signUp");
  };

  return (
    <form className="flex justify-center items-center h-screen">
      <div className="border w-25 flex justify-center items-center rounded-md p-5 flex-col px-9">
        <Image className=" w-1/2 py-2" src={logo} alt="logo" />
        <div className="flex flex-col items-center text-md py-2">
          <span>간편하게 로그인 하고</span>
          <span className=" font-extraBold">다양한 서비스를 즐기세요.</span>
        </div>
        <div className="py-4">
          <input className="border w-full p-3 my-2" placeholder="이메일 주소" type="text" />
          <input className="border w-full p-3 my-2" placeholder="비밀번호" type="password" />
        </div>
        <div className="w-full flex justify-center items-center text-xs text-font-gray200">
          <span className="mx-3 font-bold cursor-grab">아이디 찾기</span>
          <span className="mx-3"> | </span>
          <span className="mx-3 font-bold cursor-grab">비밀번호 찾기</span>
          <span className="mx-3"> | </span>
          <span className="mx-3 font-bold cursor-grab" onClick={handleClick}>
            회원가입 하기
          </span>
        </div>
        <button className="w-full h-12 mt-28 bg-primary-200 text-white font-bold hover:bg-hover">
          시작하기
        </button>
      </div>
    </form>
  );
}
