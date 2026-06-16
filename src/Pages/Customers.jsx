import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Customers = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      verified: true,
      rating: 5,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      id: 2,
      name: "Alex K.",
      verified: true,
      rating: 4,
      review:
        "The fit is perfect and the fabric feels premium. I've ordered multiple times and the quality has remained consistent every single time.",
    },
    {
      id: 3,
      name: "Emily R.",
      verified: true,
      rating: 3,
      review:
        "Shopping here has been an amazing experience. Fast delivery, great customer service, and stylish products that always receive compliments.",
    },
    {
      id: 4,
      name: "James T.",
      verified: true,
      rating: 5,
      review:
        "I was hesitant at first, but after my first order I became a regular customer. The designs are modern and the quality is outstanding.",
    },
    {
      id: 5,
      name: "Olivia W.",
      verified: true,
      rating: 4,
      review:
        "The attention to detail is incredible. Every item looks exactly as shown online and feels even better in person.",
    },
  ];
  return (
    <section className=" flex flex-col gap-5 p-5">
      <div className="head flex">
        <div className=" flex justify-between items-center mb-8  ">
          <div className="flex items-center w-1/2 px-4  flex-1 ">
            <h1 className="text-3xl font-bold  font-[myfont]  uppercase ">
              our happy customers
            </h1>
          </div>
          <div className="flex gap-4 text-2xl">
            <FaArrowLeft className="cursor-pointer" />

            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto reviews lg:justify-center scroll-smooth">
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className=" border rounded-2xl p-6 w-87.5 h-60 flex flex-col gap-4 shrink-0 md:overflow-x-auto "
            >
              <h5> {"⭐".repeat(review.rating)} </h5>
              <div className="flex items-center gap-2">
                <h3 className=" text-md font-[myfont] "> {review.name} </h3>
                <img src="accept.png" alt="" className="w-5 h-5" />
              </div>
              <p className="leading-tight  text-zinc-500 ">"{review.review}"</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
