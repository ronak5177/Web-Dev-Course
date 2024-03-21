"use client"
import submitAction from "@/actions/form";
import { useRef } from "react";


export default function Home() {
  let ref = useRef()
  return (
    <div className="container w-2/3 mx-auto my-12">
      <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset()}}>
        <div className="box flex">
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="text-black mx-4"
              name="name"
              id="name"
              type="text"
            />
          </div>

          <div>
            <label htmlFor="add">Address</label>
            <input
              className="text-black mx-4"
              name="add"
              id="add"
              type="text"
            />
          </div>

          <div>
            <button className="bg-green-600 px-3 py-1 rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
