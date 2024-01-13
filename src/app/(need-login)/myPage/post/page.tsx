import { Card } from "@/components/Card/Card";
import { MobileCard } from "@/components/Card/MobileCard";

export default function MyPost() {
  return (
    <div className="flex justify-center w-full flex-col">
      <div className="flex justify-center items-center mb-5 font-bold xs:hidden">내 게시글</div>
      <Card />
      <MobileCard />
    </div>
  );
}
