import SmokeBackground from "../Smoke/Cloud";
import CardComponent from "./CardComponent";
import { board } from "./board";

function TeamNew() {

  return (
    <div className="flex flex-col justify-center items-center w-screen h-auto gap-y-10">

      <div className={"pt-16 text-[40px] md:text-[60px] font-[700] teamheading"}>
        Our Team
      </div>

      <SmokeBackground />

      <div className="flex flex-row flex-wrap items-center justify-around">
        {board.map(({ name, position, image }) => (
          <CardComponent
            name={name}
            position={position}
            img={image}
          />
        ))}
      </div>

    </div>
  );
};

export default TeamNew;
