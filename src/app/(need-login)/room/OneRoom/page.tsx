"use client";

import { Cards } from "@/components/Cards/Cards";
// import WriteMapPage from "@/components/Map/Map";
import { getRoom } from "@/utils/getOneRoom";
import { useEffect, useState } from "react";

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
export default function OneRoom() {
  const [rooms, setRooms] = useState<RootType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomData = await getRoom();
        setRooms(roomData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full justify-between">
      <div>
        {/* <WriteMapPage /> */}
      </div>
      <div className="flex flex-col items-end z-40 h-screen overflow-y-auto">
        <Cards rooms={rooms} />
      </div>
    </div>
  );
}
