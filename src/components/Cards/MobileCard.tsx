import Image from "next/image";
import listImg from "/public/집중 배너.jpeg";
import { Heart } from "@/components/Heart/Heart";
export const MobileCard = () => {
  return (
    <div className="flex xs:hidden justify-center border-b w-full bg-red-300 h-30 p-2">
      <div className="flex w-56">
        <Image className=" h-full w-full rounded-md" src={listImg} alt="img" />
      </div>
      <div className="flex relative w-full flex-col pl-5 justify-center ">
        <div className="flex">
          <div className="text-md font-semibold">월세 500/ 50</div>
          <div className="absolute right-0 top-0">
            <Heart />
          </div>
        </div>
        <div className="flex">
          <div className="mr-7">3층</div>
          <div>33.33m2</div>
        </div>
        <div>관악구 봉천동</div>
        <div className="text-xs text-font-gray200 mt-2">깔끔 그 잡채</div>
      </div>
    </div>
  );
};
