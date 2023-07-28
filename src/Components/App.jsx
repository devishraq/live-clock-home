import React from "react";
import Time from "./Time";
import Location from "./Location";

const App = () => {
  return (
    <div className="w-full bg-lime-100 grid place-content-center h-screen">
      <Time />
      <Location />
    </div>
  );
};

export default App;
