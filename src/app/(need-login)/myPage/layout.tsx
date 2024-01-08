"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    title: "프로필 수정",
    address: "/myPage",
  },
  {
    title: "관심목록",
    address: "/myPage/interest",
  },
  {
    title: "내 게시글",
    address: "/myPage/post",
  },
];

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const router = usePathname();
  console.log(router);

  return (
    <div className="flex justify-center items-center my-16 xs:my-24">
      <div className="flex xs:border w-11/12 lg:w-7/12">
        {/*  */}
        <div className="hidden flex-col w-56 border-r xs:flex">
          {data.map((el, idx) => (
            <div className="py-5" key={idx}>
              <Link
                className={`${router === el.address ? "border-primary-200 border-l-4 py-4" : ""}`}
                href={el.address}
              >
                <span className="m-5 ">{el.title}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className={`w-full ${inter.className}`}>{children}</div>
      </div>
    </div>
  );
}
