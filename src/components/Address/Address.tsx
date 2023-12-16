import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Post from "./Post";

interface AddressProps {
  setter: Dispatch<SetStateAction<string>>;
}

const FindAddress: React.FC<AddressProps> = ({ setter }) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");

  const handleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    setPopup(!popup);
  };

  useEffect(() => {
    setter(address);
  }, [address, setter]);

  return (
    <div>
      <button className="bg-black text-white w-16 ml-2 rounded-md h-10" onClick={handleComplete}>
        검색
      </button>
      {popup && <Post setAddress={setAddress} setPopup={setPopup} />}
    </div>
  );
};

export default FindAddress;
