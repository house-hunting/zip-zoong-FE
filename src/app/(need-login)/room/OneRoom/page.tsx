"use client";

import WriteMapPage from "@/components/Map/Map";
import { getRoom } from "@/utils/getOneRoom";
import { useEffect, useState } from "react";

export type RootType = Root2[];

export interface Root2 {
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
export default function OneRoom() {
  const [room, setRoom] = useState<RootType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomData = await getRoom();
        setRoom(roomData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(room);
  return (
    <div className="flex">
      <WriteMapPage />
      <div className="bg-white z-50">asdf</div>
    </div>
  );
}
