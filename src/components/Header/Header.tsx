import Image from "next/image";
import Logo from "/public/집중 메인로고.png";
import ProfileImg from "/public/기본 프로필 이미지.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="flex justify-between py-3 px-16">
      <div className="flex">
        <Image className="w-36" src={Logo} alt="Logo" />
        <ul className="flex justify-between items-center w-72 ml-20 pt-3">
          <li className="flex flex-col cursor-grab">
            <span className=" text-md font-bold">원룸</span>
            <span className="text-xs">전월세</span>
          </li>
          <li className="flex flex-col cursor-grab">
            <span className=" text-md font-bold">투룸</span>
            <span className="text-xs">전월세</span>
          </li>
          <li className="flex flex-col cursor-grab">
            <span className=" text-md font-bold">내집 내놓기</span>
            <span className="text-xs">방 직거래</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <input
          className=" w-80 border h-auto p-2 border-gray-200 rounded-s-md"
          placeholder="원하는 지역명, 지하철역을 입력해주세요"
        />
        <button className=" bg-primary-200 p-2 rounded-e-md">
          <FaMagnifyingGlass color={"white"} size={25} />
        </button>
      </div>
      <div className="flex items-center">
        <Image className="w-11" src={ProfileImg} alt="Profile" />
        <span className="ml-3 font-semibold">ㅇㅇㅇ님</span>
      </div>
    </div>
  );
};
