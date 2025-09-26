import { useEffect, useRef, useState } from "react";
import logo from "/Spylt-React/src/assets/logo.svg";

const Loader = () => {
  const [grow, setGrow] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const showRef = useRef(null);

  useEffect(() => {
    let interval;

    if (isVisible) {
      interval = setInterval(() => {
        setGrow((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      // Hide loader after 4 seconds
      const timeout = setTimeout(() => {
        setIsVisible(false);
        clearInterval(interval);
      }, 4000);

      // Cleanup on unmount
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    // Update width of the bar using ref
    if (showRef.current) {
      showRef.current.style.width = `${grow * 1.8}px`;
    }
  }, [grow]);

  if (!isVisible) return null;

  return (
    <div className="loader flex items-center justify-center flex-col w-full h-screen bg-[#523122] fixed z-100">
      <img className="md:w-xs w-[200px] pt-48" src={logo} alt="logo" />
      <span className="font-[Antonio] font-bold text-[30px] md:text-5xl pt-40 text-[#F9E9DD] text-center">
        {grow} %
      </span>
      <div
        ref={showRef}
        className="h-2.5 bg-[#F9E9DD] mt-7"
        style={{ width: "0px", transition: "width 0.03s linear" }}
      ></div>
    </div>
  );
};

export default Loader;
