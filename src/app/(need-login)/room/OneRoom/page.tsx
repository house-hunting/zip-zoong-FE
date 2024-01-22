"use client";

import { Card } from "@/components/Card/Card";
import WriteMapPage from "@/components/Map/Map";
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
  const [room, setRoom] = useState<RootType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomData = await getRoom();
        setRoom(roomData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full justify-between">
      <div>
        <WriteMapPage />
      </div>
      <div className="flex flex-col items-end z-40 h-screen overflow-y-auto">
        <Card room={room} />
      </div>
    </div>
  );
}
