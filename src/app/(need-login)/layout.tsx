"use client";

import { MobileFooter } from "@/components/Footer/MobilFooter";
import { Header } from "@/components/Header/Header";

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
        <h6>로그인이 필요합니다.</h6>
      )}
    </>
  );
}
