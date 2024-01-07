"use client";

import Link from "next/link";
import { MdHome } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import { usePathname } from "next/navigation";

export function MobileFooter() {
  const router = usePathname();
  const isCurrentPage = (pathname: string) => router === pathname;

  return (
    <nav className="xs:hidden flex justify-around fixed bottom-0 left-0 right-0 h-14 shadow-top bg-white">
      <Link
        href={"/"}
        className={`flex flex-col justify-center items-center ${
          isCurrentPage("/") ? "text-primary-200" : ""
        }`}
      >
        <MdHome size={25} />
        <span className="text-xs">홈</span>
      </Link>
      <Link
        href={"/myPage/interest"}
        className={`flex flex-col justify-center items-center ${
          isCurrentPage("/myPage/interest") ? "text-primary-200" : ""
        }`}
      >
        <IoMdHeartEmpty size={25} />
        <span className="text-xs">찜한매물</span>
      </Link>
      <Link
        href={"/myPage/post"}
        className={`flex flex-col justify-center items-center ${
          isCurrentPage("/myPage/post") ? "text-primary-200" : ""
        }`}
      >
        <MdEditNote size={25} />
        <span className="text-xs">내 게시글</span>
      </Link>
      <Link
        href={"/myPage/more"}
        className={`flex flex-col justify-center items-center ${
          isCurrentPage("/myPage/more") ? "text-primary-200" : ""
        }`}
      >
        <IoPersonCircle size={25} />
        <span className="text-xs">더보기</span>
      </Link>
    </nav>
  );
}
