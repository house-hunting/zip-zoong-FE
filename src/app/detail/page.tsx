import { Header } from "@/components/Header/Header";
import { Heart } from "@/components/Heart/Heart";
import Image from "next/image";
import roomImg from "/public/집중 배너.jpeg";
import { Contents } from "./_components/Contents/Contents";
import { Option } from "./_components/Option/Option";

export default function Detail() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center pb-80">
        <div className="flex justify-center flex-col w-3/5">
          <div className="flex justify-center border-b border-gray-200 py-10">
            <Image className="" src={roomImg} alt="RoomImg" />
          </div>
          <div className="flex justify-between border-b border-gray-200">
            <div className="py-3">
              <span className=" text-xs">등록번호 123123</span>
              <div className="text-lg font-bold my-2">
                <span>원룸 월세 </span>
                <span className="text-primary-200">1,000/35만원</span>
              </div>
              <span>관리비 10만원</span>
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
            <div>원룸에서는 보지 못하는 이쁜 인테이러방입니다. 살기좋아요!</div>
          </div>
        </div>
      </div>
    </>
  );
}
