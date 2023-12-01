import Image from "next/image";
import EmptyHeart from "/public/빈 하트.png";

export const Heart = () => {
  return (
    <div className="w-11 ml-10 cursor-grab">
      <Image src={EmptyHeart} alt="EmptyHeart" />
    </div>
  );
};
