"use client";

import Image from "next/image";
import Logo from "/public/집중 메인로고.png";
import ProfileImg from "/public/기본 프로필 이미지.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import { LoginDataType } from "@/store/loginData.atoms";
import { useEffect, useState } from "react";

const nav = [
  {
    title: "원룸",
    subTitle: "전월세",
    address: "/",
  },
  {
    title: "투룸",
    subTitle: "전월세",
    address: "/",
  },
  {
    title: "내집 내놓기",
    subTitle: "방 직거래",
    address: "/register",
  },
];

export const Header: React.FC = () => {
  const [local, setLocal] = useState<LoginDataType | null>(null);
  console.log(local);

  useEffect(() => {
    const userInfo = localStorage.getItem("userId");

    if (userInfo) {
      const userData: LoginDataType = JSON.parse(userInfo);
      setLocal(userData);
    }
  }, []);

  const logOut = async () => {
    localStorage.removeItem("userId");
    setLocal(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/logout`);

      if (!res.ok) {
        if (!res.ok) throw new Error("");
      }

      const resData = await res.json();

      console.log(resData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between py-3 px-16">
      <div className="flex">
        <Link href={"/"}>
          <Image className="w-36 cursor-pointer" src={Logo} alt="Logo" />
        </Link>
        <ul className="flex justify-between items-center w-72 ml-20 pt-3">
          {nav.map((el, idx) => (
            <div key={idx}>
              <Link href={el.address}>
                <li className="flex flex-col cursor-grab">
                  <span className=" text-md font-bold">{el.title}</span>
                  <span className="text-xs">{el.subTitle}</span>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <input
          className=" w-80 border h-auto p-2 border-gray-200 rounded-s-md"
          placeholder="원하는 지역명, 지하철역을 입력해주세요"
        />
        <button className=" bg-primary-200 p-2 rounded-e-md">
          <FaMagnifyingGlass color={"white"} size={25} />
        </button>
      </div>
      {local ? (
        <div className="flex items-center justify-center">
          <div className="flex items-center mr-10 cursor-pointer">
            <Image className="w-11" src={ProfileImg} alt="Profile" />
            <span className="ml-3 font-semibold">{`${local.email}님`}</span>
          </div>
          <div
            className="flex items-center bg-primary-200 h-10 p-5 rounded-md text-white text-sm cursor-pointer hover:bg-hover"
            onClick={logOut}
          >
            로그아웃
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <Link href={"/login"}>
            <div className="flex items-center bg-primary-200 h-10 p-5 rounded-md text-white text-sm cursor-pointer hover:bg-hover">
              로그인 및 회원가입
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
