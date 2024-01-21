import Image from "next/image";
import closet from "/public/집중 옷장.png";
import refrigerator from "/public/집중 냉장고.png";
import airConditioner from "/public/집중 에어컨.png";
import washing from "/public/집중 세탁기.png";
import oven from "/public/집중 전자레인지.png";
import desk from "/public/집중 책상.png";

export const Option = () => {
  return (
    <div className="pb-14 border-b border-gray-200">
      <div className="font-bold text-lg my-7">옵션 정보</div>
      <div className="flex justify-around">
        <div className="flex justify-between items-center flex-col">
          <Image className="w-14" src={closet} alt="closet" />
          <span className="mt-5 font-semibold">옷장</span>
        </div>
        <div className="flex justify-between items-center flex-col">
          <Image className="w-14" src={refrigerator} alt="refrigerator" />
          <span className="mt-5 font-semibold">냉장고</span>
        </div>
        <div className="flex justify-between items-center flex-col">
          <Image className="w-14 mt-7" src={airConditioner} alt="airConditioner" />
          <span className="mt-5 font-semibold">에어컨</span>
        </div>
        <div className="flex justify-between items-center flex-col">
          <Image className="w-14" src={washing} alt="washing" />
          <span className="mt-5 font-semibold">세탁기</span>
        </div>
        <div className="flex justify-between items-center flex-col">
          <Image className="w-14 mt-6" src={oven} alt="oven" />
          <span className="mt-5 font-semibold">전자레인지</span>
        </div>
        <div className="flex justify-between items-center flex-col">
          <Image className="w-14 mt-6" src={desk} alt="desk" />
          <span className="mt-5 font-semibold">책상</span>
        </div>
      </div>
    </div>
  );
};
