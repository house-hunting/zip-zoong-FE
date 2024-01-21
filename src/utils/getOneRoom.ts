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

export const getRoom = async (): Promise<RootType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/page/boardList`);

  if (!res.ok) {
    if (!res.ok) throw new Error("정보를 가져올 수 없습니다.");
  }

  return res.json();
};
