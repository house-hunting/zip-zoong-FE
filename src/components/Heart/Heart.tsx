import Image from "next/image";
import EmptyHeart from "/public/빈 하트.png";

export const Heart = () => {
  return <Image className="w-9 ml-10 cursor-grab" src={EmptyHeart} alt="EmptyHeart" />;
};
