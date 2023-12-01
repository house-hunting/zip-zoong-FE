import roomWidth from "/public/평수.png";
import room from "/public/분리형.png";
import floor from "/public/층.png";
import parking from "/public/주차.png";
import calendar from "/public/날짜.png";
import direction from "/public/방향.png";
import elevator from "/public/엘베.png";
import Image from "next/image";

export const Contents = () => {
  return (
    <div className="py-5 border-b border-gray-200">
      <div className="text-md my-2">1.5형 분리형 공간 넓은 잠실 풀옵션 분리형 원룸</div>
      <div className="py-4">
        <div className="flex items-center my-5">
          <Image className="w-12 mr-7" src={roomWidth} alt="roomWidth" />
          <span className="font-bold">7평</span>
        </div>
        <div className="flex items-center my-5">
          <Image className="w-12 mr-7" src={room} alt="room" />
          <span className="font-bold">분리형 원룸</span>
        </div>
        <div className="flex items-center my-5">
          <Image className="w-12 mr-7" src={floor} alt="floor" />
          <span className="font-bold">5층</span>
        </div>
        <div className="flex items-center my-5">
          <Image className="w-12 mr-7" src={parking} alt="parking" />
          <span className="font-bold">주차 불가능</span>
        </div>
        <div className="flex items-center my-5">
          <Image className="w-12 mr-7" src={calendar} alt="calendar" />
          <span className="font-bold">0000.00.00 이후 입주가능</span>
        </div>
        <div className="flex items-center my-5">
          <Image className="w-12 mr-7" src={direction} alt="direction" />
          <span className="font-bold">남서향</span>
        </div>
        <div className="flex items-center my-5">
          <Image className="w-12 mr-7" src={elevator} alt="elevator" />
          <span className="font-bold">엘리베이터 있음</span>
        </div>
      </div>
    </div>
  );
};
