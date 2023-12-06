"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
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
    <>
      <Header />
      <div className="flex justify-center items-center my-24">
        <div className="flex border w-7/12">
          <div className="flex flex-col w-56 border-r">
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
    </>
  );
}
