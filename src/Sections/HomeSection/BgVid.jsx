import { useEffect, useRef } from "react";
import BgVideo from "../../assets/Videos/main-video.mp4";

const BgVid = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Video play failed:", err);
        });
      }
    }, 4000);

    // Cleanup in case component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bgVid h-[100vh] w-full absolute overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full hidden md:block object-cover"
        muted
        src={BgVideo}
      ></video>
    </div>
  );
};

export default BgVid;
