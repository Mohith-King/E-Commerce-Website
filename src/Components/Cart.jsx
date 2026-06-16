import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTag } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Update from "../Pages/Update";
import Shopco from "../Pages/Shopco";

const Cart = ({ products }) => {
  useEffect(() => {
    if (products?.length) {
      setcartItems(
        products.slice(0, 3).map((item) => ({
          ...item,
          quantity: 1,
        })),
      );
    }
  }, [products]);

  const [cartItems, setcartItems] = useState([]);

  const increaseQuantity = (id) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + Math.ceil(item.price / 10) * 10 * item.quantity,
    0,
  );

  const discountCal = (subtotal * 15) / 100;

  const deliveryFee = 15;

  const total = subtotal - discountCal + deliveryFee;

  return (
    <>
      <section className="p-5 select-none ">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-[myfont] font-semibold ">Your Cart</h1>

          <div className="flex flex-col gap-4 border px-2 rounded-3xl border-zinc-400 ">
            {cartItems.map((item) => {
              let { price } = item;

              const itemPrice = Math.ceil(price / 10) * 10;

              return (
                <div
                  key={item.id}
                  className=" border-t border-zinc-400 min-h-40 p-4 px-3 flex  gap-3"
                >
                  <div className="image ">
                    <img
                      src={item.images[0]}
                      className="h-30 w-30 rounded-2xl "
                    />
                  </div>
                  <div className="flex flex-col gap-1 lg:w-full ">
                    <div className="sideheading flex justify-center items-start ">
                      <h2 className="leading-tight font-bold flex-1  ">
                        {item.title}
                      </h2>
                      <RiDeleteBin6Fill className="text-[20px] text-red-500 mt-1.5 cursor-pointer " />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[12px] text-zinc-600 font-semibold  ">
                        <b className="text-[14px] text-zinc-800 ">Size</b> :
                        Large
                      </p>
                      <p className="text-[12px] text-zinc-600 font-semibold ">
                        <b className="text-[14px] text-zinc-800 ">Color</b> :
                        White
                      </p>

                      <div className="price flex justify-between ">
                        <h4 className="text-xl font-bold pt-1 ">
                          ${itemPrice}
                        </h4>

                        <div className="bg-zinc-300 flex gap-4 px-3 items-center rounded-3xl ">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="text-bold text-[12px] "
                          >
                            <FaMinus />
                          </button>
                          <p className="text-bold text-[18px] ">
                            <b> {item.quantity} </b>
                          </p>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="text-bold text-[12px] "
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order p-4 border-2 flex flex-col gap-3 rounded-3xl ">
            <h3 className="text-xl font-bold font-[myfont] ">Order Summary </h3>

            <div className="flex flex-col gap-4  ">
              <div className="flex gap-2 justify-between ">
                <p className="text-[16px] font-normal text-zinc-600 ">
                  Subtotal
                </p>
                <p className="text-md font-bold text-black ">
                  ${Math.round(subtotal)}{" "}
                </p>
              </div>

              <div className="flex gap-2 justify-between ">
                <p className="text-[16px] font-normal text-zinc-600 ">
                  Discount (10%)
                </p>
                <p className="text-md font-bold text-black ">
                  -${Math.round(discountCal)}
                </p>
              </div>

              <div className="flex gap-2 justify-between ">
                <p className="text-[16px] font-normal text-zinc-600 ">
                  Delivery Fee
                </p>
                <p className="text-md font-bold text-black ">$15 </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t-2  border-zinc-400 mt-3 ">
              <div className="flex w-full items-center px-2 justify-between pt-3 ">
                <h4 className="text-[18px] font-bold ">Total</h4>
                <h4 className="text-xl font-bold">${Math.floor(total)}</h4>
              </div>
              <div className="flex gap-2 items-center mt-3 ">
                <div className="input px-4 py-2 text-zinc-200 flex items-center bg-zinc-500 rounded-4xl ">
                  <FaTag />
                  <input
                    type="text"
                    className="px-2 py-1 outline-none border-none placeholder:text-[14px] "
                    placeholder="Add promo code"
                  />
                </div>
                <button className="bg-black px-4 py-2 text-white rounded-3xl ">
                  Apply
                </button>
              </div>
              <div className="text-white bg-black w-full flex px-2 items-center hover:bg-zinc-900 hover:text-zinc-200 justify-center rounded-4xl ">
                <button className="flex px-3  items-center justify-around gap-3 py-3 ">
                  <p>Go to Checkout</p>
                  <p>
                    <FaArrowRightLong />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Update />
      <Shopco />
    </>
  );
};

export default Cart;
