import Image from "next/image";
import closet from "/public/집중 옷장.png";
import refrigerator from "/public/집중 냉장고.png";
import airConditioner from "/public/집중 에어컨.png";
import washing from "/public/집중 세탁기.png";
import oven from "/public/집중 전자레인지.png";
import desk from "/public/집중 책상.png";

export const Option = () => {
  return (
    <div>
      <div>옵션 정보</div>
      <div>
        <Image src={closet} alt="closet" />
        <span>옷장</span>
      </div>
      <div>
        <Image src={refrigerator} alt="refrigerator" />
        <span>냉장고</span>
      </div>
      <div>
        <Image src={airConditioner} alt="airConditioner" />
        <span>에어컨</span>
      </div>
      <div>
        <Image src={washing} alt="washing" />
        <span>세탁기</span>
      </div>
      <div>
        <Image src={oven} alt="oven" />
        <span>전자레인지</span>
      </div>
      <div>
        <Image src={desk} alt="desk" />
        <span>책상</span>
      </div>
    </div>
  );
};
