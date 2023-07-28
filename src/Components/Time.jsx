import React from "react";
import { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => intervalid;
  }, []);

  const tailwindColors = [
    "text-green-400",
    "text-violet-400",
    "text-yellow-400/80",
  ];

  const time = date.toLocaleTimeString().split(" ")[0];

  return (
    <h1 className="md:text-[13rem] font-bold">
      {time.split(":").map((value, index) => (
        <span key={index} className={tailwindColors[index]}>
          {value}
          {index !== 2 ? ":" : ""}
        </span>
      ))}
    </h1>
  );
};

export default Time;
