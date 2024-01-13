"use client";

import { MobileFooter } from "@/components/Footer/MobilFooter";
import { Header } from "@/components/Header/Header";
import Link from "next/link";

export default function NeedLoginLayout({ children }: { children: React.ReactNode }) {
  const userId = localStorage.getItem("userId");

  return (
    <>
      {userId ? (
        <div className="">
          <Header />
          {children}
          <MobileFooter />
        </div>
      ) : (
        <>
          <h6>로그인이 필요합니다.</h6>
          <Link href={"/login"}>
            <button>로그인하러 가기</button>
          </Link>
        </>
      )}
    </>
  );
}
