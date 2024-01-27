"use client";

import Image from "next/image";
import listImg from "/public/집중 배너.jpeg";
import { MdOutlineCheckCircle } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Heart } from "../Heart/Heart";
import { useRouter } from "next/navigation";

export interface Room {
  seq: number;
  title: string;
  deposit: number;
  month: number;
  floorsNumber: string;
  address: string;
  roomArea: number;
  roomImage: RoomImage[];
}

export interface RoomImage {
  seq: number;
  url: string;
  createdAt: string;
  boardId: number;
}

type OptionProps = {
  room: Room;
  idx: number;
};
export const Card = ({ room, idx }: OptionProps) => {
  const router = useRouter();
  console.log(room);

  const goDetail = (seq: number) => {
    router.push(`/room/${seq}`);
  };

  return (
    <div key={idx} className="hidden xs:flex justify-center w-80 p-8 bg-white">
      <div className="hover:cursor-pointer" onClick={() => goDetail(room.seq)}>
        <div className="relative">
          <>
            {/* {room.roomImage.map((img, idx) => ( */}
            <Image
              className="h-72 rounded-md"
              src={`${process.env.NEXT_PUBLIC_URL}/${room.roomImage[0].url.replace('uploads', 'img')}`}
              alt="img"
              width={200}
              height={200}
            />
            {/* ))} */}
          </>
          <div className="absolute bottom-2 right-3 ">
            <Heart />
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-center cursor-pointer text-sm hover:text-primary-200">
            <MdOutlineCheckCircle />
            <span className="ml-1">거래완료</span>
          </div>
          <div className="flex items-center cursor-pointer text-sm hover:text-primary-200">
            <FaRegEdit />
            <span className="ml-1">수정하기</span>
          </div>
          <div className="flex items-center cursor-pointer text-sm hover:text-primary-200">
            <FaRegTrashAlt />
            <span className="ml-1">삭제하기</span>
          </div>
        </div>
        <div>
          <div className="text-md font-semibold mt-4">
            월세 {room.deposit}/ {room.month}
          </div>
          <div className="font-semibold text-sm">{room.address}</div>
          <div className="text-sm mt-2">{room.title}</div>
        </div>
      </div>
    </div>
  );
};
