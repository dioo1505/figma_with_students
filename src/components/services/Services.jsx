import React from "react";
import blob from "./Images/bg.png";
import dot from "./Images/dot.png";
import { cards } from "./data";

const Services = () => {
  return (
    <div
      style={{ backgroundImage: `url(${blob})` }}
      className="services py-5 min-h-[80vh] bg-no-repeat bg-left mullish"
    >
      <div
        style={{ backgroundImage: `url(${dot})` }}
        className="main-container bg-no-repeat bg-right-bottom"
      >
        <center>
          <h1 className="text-3xl font-semibold">Our Services</h1>
          <div className="flex justify-center pt-3">
            <div className="w-[45px] h-[1.7px] bg-black"></div>
          </div>
        </center>
        <div className="text-center py-7">
          <p>
            We provide to you the best choices for you. Adjust it to your health
            needs and make sure your undergo treatment <br /> with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="grid grid-cols-1 sm:gird-cols-2 py-6 md:grid-cols-3 gap-5">
          {cards.map((item, i) => {
            return (
              <div key={i} className="flex justify-center">
                <div className="card bg-white shadow-2xl  w-[auto] sm:w-[350px] p-[20px] rounded-md flex flex-col gap-3">
                  <div className="card-image">
                    <img src={item.thumbnail} alt="image1" />
                  </div>
                  <div className="card-body flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p style={{whiteSpace: "pre-line"}}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          <center>
            <button className="border-2 border-cyan-500 text-cyan-500 rounded-2xl py-[5px] px-[35px] transition-all duration-300 hover:bg-cyan-500 hover:text-white cursor-pointer">Learn more</button>
          </center>
      </div>
    </div>
  );
};

export default Services;
