const Flavours = () => {
  const letters = ["W", "E", "H", "A", "V", "E", "6"];
  return (
    <div className="w-full h-screen overflow-hidden relative bg-[#FAEADE]">

      <div className=" we-have h-full w-[60%] flex flex-col items-center justify-center font-[Antonio] text-[#523122] text-[7vw]">
        <div className="flex">
          {letters.map((char, index) => (
            <h1
              key={index}
              className={index === 2 || index === 6 ? "ml-5" : ""}
            >
              {char}
            </h1>
          ))}
        </div>

        <div className="freaking font-[Antonio] text-[#523122] font-extrabold flex">
          {"FREAKING".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>

        <div className="freaking font-[Antonio] text-[#523122] font-extrabold flex">
          {"DELICIOUS FLAVOUR".split("").map((char, index) => (
            <span key={index} className={char === "S" ? "mr-3" : ""} >{char}</span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Flavours;

// bg-[#defae5]
