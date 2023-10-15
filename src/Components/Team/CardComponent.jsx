import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const CardComponent = ({ name, position, img }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="text-white flex flex-col items-center justify-center gap-1 mx-6"
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <div className=" w-75 h-110 bg-gray-1000 flex justify-center rounded-xl p-8 shadow-[0_0_4px_2px_rgba(255,165,0,0.5)]">
        <img
          loading="lazy"
          src={img}
          alt={name}
          className={"my-5 object-contain h-52 w-52"}
        />
      </div>
      <div>
        <h2 className="font-bold mt-2">{name}</h2>
      </div>
      <div>
        <h3 className="font-light mb-8">{position}</h3>
      </div>
    </div>
  );
};

export default CardComponent;
