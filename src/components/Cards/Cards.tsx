"use client";

import Image from "next/image";
import listImg from "/public/집중 배너.jpeg";
import { MdOutlineCheckCircle } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Heart } from "../Heart/Heart";
import { useRouter } from "next/navigation";
import { Card } from "@/components/Cards/Card";

export type RootType = Root2[];

export interface Root2 {
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
  rooms: RootType | null;
};
export const Cards = ({ rooms }: OptionProps) => {
  const router = useRouter();
  console.log(rooms);

  const goDetail = (seq: number) => {
    router.push(`/room/${seq}`);
  };
  // const aa = room?.map((el) => el.roomImage[0].url);
  const aa = rooms?.map((el) => el.roomImage[0].url);

  console.log(aa);
  return (
    <>
      {rooms?.map((room, idx) => (
        <Card key={room.seq} room={room} idx={idx} />
      ))}
    </>
  );
};
