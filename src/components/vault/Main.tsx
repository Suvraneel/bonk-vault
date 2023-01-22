import React, { useState } from "react";
import "react-range-slider-input/dist/style.css";
import Slider from "./Slider";
// import useSmartContract from "../hooks/useSmartContract";
const Vault = () => {
  const [distrib, setDistrib] = useState([0]);
  const [roster, setRoster] = useState(["No One"]);
  const [total, setTotal] = useState(0);
  const [numOfParty, setNumOfParty] = useState(1);
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");
  const addMore = () => {
    setDistrib([...distrib, value]);
    setRoster([...roster, input]);
    setNumOfParty(numOfParty + 1);
    console.log(distrib);
    console.log(roster);
  };
  return (
    <div className="w-screen h-screen fixed top-0 overflow-y-scroll bg-gradient-to-r from-purple-500/30 to-white pt-20">
      <div className="w-full h-full p-10 flex flex-col justify-start items-center sm:items-start gap-5 ">
        <div className="w-full flex flex-row justify-start items-center gap-10">
          <button
            onClick={() => addMore()}
            className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96"
          >
            <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
            <span className="relative text-black">Add Participant</span>
          </button>
          {/* <button
            onClick={() => useSmartContract(roster.slice(1), distrib.slice(1))}
            className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96"
          >
            <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
            <span className="relative text-black">Create Vault</span>
          </button> */}
        </div>
        <div className="w-full h-8 flex flex-col justify-start items-start gap-10 mt-10">
          {distrib.map((item, i) => {
            return (
              <div
                className="w-full h-full flex flex-row flex-wrap justify-between items-center my-10 sm:my-5"
                key={i}
              >
                <div className="user-box w-full md:w-1/3">
                  <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                    <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-8 rounded text-black relative"
                      disabled={i !== numOfParty - 1}
                      required
                      onInput={(e) => setInput(e.target.value)}
                    ></input>
                    {i === numOfParty - 1 && (
                      <label className="px-5">{"Address " + i + "*"}</label>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <Slider
                    total={total}
                    setTotal={setTotal}
                    disabled={i !== numOfParty - 1}
                    setValue={setValue}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
};

export default Vault;