import React from "react";
import Button from "./Button";

const Navbar = ({ count }) => {
  return (
    <>
      <div>This is navbar</div>
      <Button count={count} />
    </>
  );
};

export default Navbar;
