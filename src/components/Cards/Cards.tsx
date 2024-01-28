"use client";

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
  return (
    <>
      {rooms?.map((room, idx) => (
        <Card key={room.seq} room={room} idx={idx} />
      ))}
    </>
  );
};
