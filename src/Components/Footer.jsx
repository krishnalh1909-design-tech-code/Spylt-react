

const Footer = () => {
  const title = '#CHUGPRESPONSIBLY';
  const characters = title.split('');

  return (
    <div className="relative footer flex justify-center items-start w-full h-screen bg-[#222123]">
      <div className="title text-[7.5vw] font-[Antonio] text-[#FAEADE] font-extrabold flex h-max w-max overflow-hidden mt-3 z-50">
        {characters.map((char, index) => (
          <h1 key={index}>{char}</h1>
        ))}
      </div>

      <video
        className="w-full h-screen object-cover absolute top-0"
        autoPlay
        muted
        loop
        playsInline
        src="https://www.dl.dropboxusercontent.com/scl/fi/plc5z9ncgq0y2x21c84s8/splash3.webm?rlkey=4zzvzi1nw77o1zs3cnkmxlanx&st=d1hnytz0&dl=0"
      />
    </div>
  );
};

export default Footer;
