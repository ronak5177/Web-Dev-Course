import React, { useContext } from "react";
import { counterContext } from "../context/context";

const Component1 = () => {
  const value = useContext(counterContext);
  return (
    <>
      <div>
        Navbar Button Component1 your counter valus is: {value.count}
        {/* your count value is {count} */}
      </div>
    </>
  );
};

export default Component1;
