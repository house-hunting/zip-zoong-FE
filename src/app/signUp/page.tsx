"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { SignUpInput } from "./_components/signUpInput";

const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 필수로 입력해주세요")
    .email("이메일 형식에 맞게 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .max(18, "18자 이내로 입력해주세요")
    .min(8, "최소8자 이상 입력해주세요")
    .matches(
      /^.*(?=^.{8,18}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      "특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요"
    ),
  confirmPW: yup
    .string()
    .required("비밀번호를 다시 확인해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});

export default function SignUp() {
  type FormData = {
    email: string;
    password: string;
    confirmPW: string;
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(SignUpSchema) });

  const onSubmit = async (data: FormData) => {
    alert(JSON.stringify(data));
    console.log(data);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("회원가입에 실패하셨습니다");
      }

      // const resData = res.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex justify-center items-center h-screen" onSubmit={handleSubmit(onSubmit)}>
      <div className="border w-25 flex justify-center items-center rounded-md p-5 flex-col px-9">
        <div className="flex flex-col items-center text-md py-10">
          <span>간편하게 로그인 하고</span>
          <span className=" font-extraBold">다양한 서비스를 즐기세요.</span>
        </div>
        <div className="py-4 w-full">
          <SignUpInput
            name="email"
            type="text"
            control={control}
            errors={errors}
            placeholder="이메일"
          />
          <SignUpInput
            name="password"
            type="password"
            control={control}
            errors={errors}
            placeholder="비밀번호"
          />
          <SignUpInput
            name="confirmPW"
            type="password"
            control={control}
            errors={errors}
            placeholder="비밀번호 확인"
          />
        </div>
        <button className="w-full h-12 mt-24 bg-primary-200 text-white font-bold hover:bg-hover">
          가입하기
        </button>
      </div>
    </form>
  );
}
