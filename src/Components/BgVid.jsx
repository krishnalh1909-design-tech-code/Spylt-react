import { useEffect, useRef } from "react";
import BgVideo from "/Spylt-React/src/assets/Videos/main-video.mp4";

const BgVid = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Video playback failed:", err);
        });
      }
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <div className="bgVid h-screen w-full absolute overflow-hidden">
      <video
        ref={videoRef}
        className="h-screen w-full object-cover hidden md:block"
        muted
        src={BgVideo}
      ></video>
    </div>
  );
};

export default BgVid;
