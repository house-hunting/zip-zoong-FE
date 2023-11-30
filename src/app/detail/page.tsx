import { Header } from "@/components/Header/Header";
import { Heart } from "@/components/Heart/Heart";
import Image from "next/image";
import roomImg from "/public/집중 배너.jpeg";
import { Contents } from "./_components/Contents/Contents";
import { Option } from "./_components/Option/Option";

export default function Detail() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Image src={roomImg} alt="RoomImg" />
        </div>
        <div>
          <div>
            <span>등록번호 123123</span>
            <div>
              <span>원룸 월세 </span>
              <span>1,000/35만원</span>
            </div>
            <span>관리비 10만원</span>
          </div>
          <div>
            <button>채팅하기</button>
            <Heart />
          </div>
        </div>
        <Contents />
        <Option />
      </div>
    </div>
  );
}
