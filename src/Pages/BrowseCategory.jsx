import React from "react";

const BrowseCategory = () => {
  return (
    <section className="category   p-5">
      <div className="bg-zinc-500 rounded-2xl flex flex-col gap-2 p-5">
        <div className="flex justify-center items-center text-center ">
          <h1 className="text-3xl font-bold font-[myfont] ">
            BROWSE BY DRESS STYLE
          </h1>
        </div>
        <div className="p-5  flex flex-col justify-center items-center md:flex-row lg:flex-row gap-4">
          <div className="bg-white p-3 px-4  w-full md:w-1/4 lg:w-1/4 h-44 rounded-2xl ">
            <h6 className="font-semibold text-md font-[myfont] ">Casual</h6>
          </div>
          <div className="bg-white p-3 px-4  w-full md:w-1/4 lg:w-1/4 h-44 rounded-2xl ">
            <h6 className="font-semibold text-md font-[myfont] ">Formal</h6>
          </div>
          <div className="bg-white p-3 px-4  w-full md:w-1/4 lg:w-1/4 h-44 rounded-2xl ">
            <h6 className="font-semibold text-md font-[myfont] ">Party</h6>
          </div>
          <div className="bg-white p-3 px-4  w-full md:w-1/4 lg:w-1/4 h-44 rounded-2xl ">
            <h6 className="font-semibold text-md font-[myfont] ">Gym</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategory;
