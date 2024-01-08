import Image from "next/image";
import ProfileImg from "/public/기본 프로필 이미지.png";
import { FaPen } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import Link from "next/link";

export default function MorePage() {
  return (
    <div className="flex justify-center items-center flex-col xs:hidden">
      <div className="font-bold">더보기</div>
      <div className="flex items-center w-full my-6 py-5 border-b">
        <Image className="w-20 mx-5" src={ProfileImg} alt="Profile" />
        <span className="font-bold text-md">ㅇㅇㅇ</span>
      </div>
      <div className="w-full px-5">
        <Link className="flex my-3 items-center" href={"/register"}>
          <FaPen />
          <span className="ml-3">방 내놓기</span>
        </Link>
        <Link className="flex my-8 items-center" href={"/myPage"}>
          <FiInfo size={20} />
          <span className="ml-3">내 정보</span>
        </Link>
      </div>
      <button className="w-full h-12 mt-36 bg-primary-200 text-white font-bold hover:bg-hover">
        로그아웃
      </button>
    </div>
  );
}
