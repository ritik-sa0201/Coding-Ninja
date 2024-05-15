const CardComponent = ({ name, position, img }) => {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-1 mx-6">
      <div className=" w-[min(80vw,35vh)] h-[min(100vw,41vh)] bg-gray-900 flex justify-center rounded-xl p-8 shadow-[0_0_4px_2px_rgba(17 24 39,0.5)]">
        <img
          loading="lazy"
          src={img}
          alt={name}
          className={"object-cover rounded h-full w-full"}
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
