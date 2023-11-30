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
    <div>
      <div>1.5형 분리형 공간 넓은 잠실 풀옵션 분리형 원룸</div>
      <div>
        <div>
          <Image src={roomWidth} alt="roomWidth" />
          <span>7평</span>
        </div>
        <div>
          <Image src={room} alt="room" />
          <span>분리형 원룸</span>
        </div>
        <div>
          <Image src={floor} alt="floor" />
          <span>5층</span>
        </div>
        <div>
          <Image src={parking} alt="parking" />
          <span>주차 불가능</span>
        </div>
        <div>
          <Image src={calendar} alt="calendar" />
          <span>0000.00.00 이후 입주가능</span>
        </div>
        <div>
          <Image src={direction} alt="direction" />
          <span>남서향</span>
        </div>
        <div>
          <Image src={elevator} alt="elevator" />
          <span>엘리베이터 있음</span>
        </div>
      </div>
    </div>
  );
};
