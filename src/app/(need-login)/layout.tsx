"use client";

export default function NeedLoginLayout({ children }: { children: React.ReactNode }) {
  const userId = localStorage.getItem("userId");
  userId && console.log(userId);

  return <>{userId ? <div>{children}</div> : <h6>로그인이 필요합니다.</h6>}</>;
}
