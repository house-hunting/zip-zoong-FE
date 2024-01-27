export interface DetailType {
  seq: number;
  roomType: string;
  address: string;
  addressDetail: string;
  roomArea: number;
  roomInfo: string;
  rentType: string;
  deposit: number;
  month: number;
  cost: boolean;
  roomCost: number;
  selectDate: boolean;
  datePicker: string;
  totalfloor: string;
  floorsNumber: string;
  elevator: boolean;
  parking: boolean;
  parkingCost: number;
  title: string;
  textArea: string;
  createdAt: string;
  userId: string;
  roomImage: RoomImage[];
}

export interface RoomImage {
  seq: number;
  url: string;
  createdAt: string;
  boardId: number;
}

export const getDetail = async (seq: number): Promise<DetailType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/page/boardDetail/${seq}`);
  console.log(res);
  if (!res.ok) {
    // throw new Error("정보를 가져올 수 없습니다.");
    console.error("정보를 가져올 수 없습니다.")
  }

  return res.json();
};
