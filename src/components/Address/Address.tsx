import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Post from "./Post";

interface AddressProps {
  setter: Dispatch<SetStateAction<string>>;
}

const FindAddress: React.FC<AddressProps> = ({ setter }) => {
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    setter(address);
  }, [address, setter]);

  return (
    <>
      <div>
        <button>검색</button>
        {/* <Post  /> */}
      </div>
    </>
  );
};

export default FindAddress;
