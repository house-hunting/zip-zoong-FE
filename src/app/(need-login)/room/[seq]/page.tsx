// "use client";

import { Heart } from "@/components/Heart/Heart";
import Image from "next/image";
import roomImg from "/public/집중 배너.jpeg";
import { Contents, Option } from "./_components";
import { DetailType, getDetail } from "@/utils/getDetail";
import { useEffect, useState } from "react";

type Props = {
  params: {
    seq: number;
  };
};

export default async function Detail({ params }: Props) {
  // const [detail, setDetail] = useState<DetailType | null>(null);
  const res = await getDetail(params.seq);
  console.log(res);

  // 일단은 서버 컴포넌트라 이렇게 하고 클라이언트로 바뀌면 밑에 코드 사용 예정

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getDetail(params.seq);
  //       setDetail(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(detail);

  return (
    <>
      <div className="flex justify-center items-center pb-80">
        <div className="flex justify-center flex-col w-3/5">
          <div className="flex justify-center border-b border-gray-200 py-10">
            <Image className="" src={roomImg} alt="RoomImg" />
          </div>
          <div className="flex justify-between border-b border-gray-200">
            <div className="py-3">
              <span className=" text-xs">등록번호 {res.seq}</span>
              <div className="text-lg font-bold my-2">
                <span>원룸 월세 </span>
                <span className="text-primary-200">
                  {res.deposit}/{res.month}만원
                </span>
              </div>
              <span>관리비 {res.roomCost}만원</span>
            </div>
            <div className="flex items-center">
              <button className="bg-primary-200 w-32 h-11 rounded-md text-white font-semibold hover:bg-hover">
                채팅하기
              </button>
              <Heart />
            </div>
          </div>
          <Contents />
          <Option />
          <div>
            <div className="font-bold text-lg my-7">상세 설명</div>
            <div>{res.textArea}</div>
          </div>
        </div>
      </div>
    </>
  );
}
