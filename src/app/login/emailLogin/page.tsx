"use client";

import Image from "next/image";
import logo from "/public/집중 메인로고.png";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LoginInput } from "./_components/loginInput";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 필수로 입력해주세요")
    .email("이메일 형식에 맞게 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .min(8, "최소8자 이상 입력해주세요")
    .max(18, "18자 이내로 입력해주세요")
    .matches(
      /^.*(?=^.{8,18}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      "특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요"
    ),
});

type FormData = {
  email: string;
  password: string;
};

type Res = {
  id?: string;
  email: string;
  nickname?: string;
  password: string;
  confirmPW?: string;
  provider?: string;
  img?: string;
};

export default function Login() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(LoginSchema) });

  const onSubmit = async (data: Res) => {
    console.log(data);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("로그인에 실패하셨습니다");
      }
      if (res.ok) {
        router.push("/");
      }

      const resData = await res.json();
      // setLogin(resData);
      localStorage.setItem("userId", JSON.stringify(resData));

      console.log(resData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    router.push("/signUp");
  };

  return (
    <form className="flex justify-center items-center h-screen" onSubmit={handleSubmit(onSubmit)}>
      <div className="border w-25 flex justify-center items-center rounded-md p-5 flex-col px-9">
        <Image className=" w-1/2 py-2" src={logo} alt="logo" />
        <div className="flex flex-col items-center text-md py-2">
          <span>간편하게 로그인 하고</span>
          <span className=" font-extraBold">다양한 서비스를 즐기세요.</span>
        </div>
        <div className="py-4 w-full">
          <LoginInput
            name="email"
            type="text"
            control={control}
            errors={errors}
            placeholder="이메일"
          />
          <LoginInput
            name="password"
            type="password"
            control={control}
            errors={errors}
            placeholder="비밀번호"
          />
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
