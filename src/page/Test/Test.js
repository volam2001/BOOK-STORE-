import React from "react";
import { useContext } from "react";
import { allContext } from "../../context/AllContext";
import { useState } from "react";
const Test = () => {
  const { dataTiengviet } = useContext(allContext);
  //   const [data, setData] = useState(dataTiengviet);
  const [slice, setSlice] = useState(2);
  const handleClick = () => {
    if (slice > 0) {
      setSlice(slice - 1);
    }
  };
  const handleClick2 = () => {
    if (slice < dataTiengviet.length - 1) {
      setSlice(slice + 1);
    }
  };
  //   console.log("check", dataTiengviet);
  return (
    <div>
      <div className="mt-[100px] flex justify-center items-center  ">
        <img src={dataTiengviet[slice]?.url} alt=""></img>
      </div>
      <div className="mt-[100px] flex justify-center">
        <button
          onClick={() => handleClick()}
          className="p-[20px] bg-blue-500 rounded-lg mr-[30px]"
        >
          back
        </button>
        <button
          onClick={handleClick2}
          className="p-[20px] bg-blue-500 rounded-lg"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Test;
