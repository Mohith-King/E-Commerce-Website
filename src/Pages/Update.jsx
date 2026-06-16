import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsMailbox } from "react-icons/bs";

const Update = () => {
  const [email, setemail] = useState("");
  const handleChange = (e) => {
    setemail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Enter Your email");
    }

    const data = {
      email: email,
    };

    setemail("");

    JSON.stringify(localStorage.setItem("user", data));

    toast.success("Successfully Submitted");
  };

  return (
    <section className="p-5 flex  lg:justify-center lg:items-center ">
      <div className="w-full lg:w-[70%] bg-black flex flex-col gap-5 lg:flex-row lg:justify-between rounded-3xl p-5">
        <h1 className="font-[myfont] text-3xl lg:w-1/2 lg:px-10 font-bold text-white ">
          stay upto date about our latest offers
        </h1>
        <div className="flex flex-col lg:w-1/3 gap-2">
          <div className="bg-white items-center gap-5 flex px-4 rounded-3xl py-2 ">
            <BsMailbox className="text-zinc-600" />
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="enter your email address"
              className="outline-none border-none placeholder:text-zinc-400 flex-1"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="text-black bg-white w-full rounded-4xl px-3 py-2 outline-none border-none font-semibold text-md active:bg-green-600 hover:bg-zinc-200 transition duration-300"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Update;
