import { useRef } from "react";
import { DecoderText } from "../../Components/DecoderText/DecoderText";
import CardComponent from "./CardComponent";
import { board } from "./board";
import { useInView } from "framer-motion";

function TeamNew() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-auto gap-y-10">
      <div ref={aboutRef} id="top">
        <div
          className={`md:text-7xl text-5xl text-gray-200 bg-clip-text text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 mt-10`}
        >
          <DecoderText text="OUT TEAM" start={aboutInView} />
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-around">
        {board.map(({ name, position, image }) => (
          <CardComponent name={name} position={position} img={image} />
        ))}
      </div>
    </div>
  );
}

export default TeamNew;
