import { Card } from "@/components/Card/Card";
import { MobileCard } from "@/components/Card/MobileCard";

export default function MyInterest() {
  return (
    <div className="flex justify-center w-full flex-col">
      <div className="flex justify-center items-center mb-5 font-bold">찜한 매물</div>
      <Card />
      <MobileCard />
    </div>
  );
}
