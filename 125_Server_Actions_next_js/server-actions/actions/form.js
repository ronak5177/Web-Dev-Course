"use server";
import fs from "fs/promises";

const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"));
    let a = await fs.writeFile(
      "demo.txt",
      `This is demo file created by custom next js\nName is ${e.get(
        "name"
      )} and Address is ${e.get("add")}`
    );
    console.log(a);
  };


export default submitAction