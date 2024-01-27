import { Card } from "@/components/Cards/Cards";
import { MobileCard } from "@/components/Cards/MobileCard";

export default function MyInterest() {
  return (
    <div className="flex justify-center w-full flex-col">
      <div className="flex justify-center items-center mb-5 font-bold xs:hidden">찜한 매물</div>
      <Card />
      <MobileCard />
    </div>
  );
}
