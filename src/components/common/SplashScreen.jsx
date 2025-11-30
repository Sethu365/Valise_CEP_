import { useEffect } from "react";
import splashVideo from "../../assets/splash.mp4";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  // Show splash for ~5.5 seconds, then hide
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2500); // 5.5 sec – tweak if you want
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash">
      <div className="splashVideoFrame">
        <video
          className="splashVideo"
          src={splashVideo}
          autoPlay
          muted
          playsInline
        />
      </div>
    </div>
  );
}
