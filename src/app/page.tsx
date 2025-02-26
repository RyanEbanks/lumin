"use client";
import Navigation from "./navigation/page";
import Footer from "./footer/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSlider, setActiveSlider] = useState(0)

const video = [
  'videos/lumin_1.mp4',
  'videos/lumin_5.mp4',
  'videos/new_lumin_2.mp4',
  'videos/lumin_3.mp4',
  'videos/lumin_4.mp4',
];


useEffect (()=> {
  const interval = setInterval(() => {
    setActiveSlider(prevSlider => (prevSlider >= 4 ? 0 : prevSlider + 1));
  }, 6000);

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <Navigation />
      <main className="m-20">
        <div className="flex flex-row">
          <img src="LUMIN logo.svg" alt="website logo" className="w-[150px] h-[150px]" />
          {/* Slider Wrapper */}
          <div className="slider-wrapper">

            <div className="slider-btn-holder">
              <button id="slide-1" className={`slider-btn ${activeSlider === 0 ? "bg-white" : "bg-slate-300/30"}`} onClick={() => setActiveSlider(0)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 1 ? "bg-white" : "bg-slate-300/30"}`} onClick={() => setActiveSlider(1)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 2 ? "bg-white" : "bg-slate-300/30"}`} onClick={() => setActiveSlider(2)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 3 ? "bg-white" : "bg-slate-300/30"}`} onClick={() => setActiveSlider(3)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 4 ? "bg-white" : "bg-slate-300/30"}`} onClick={() => setActiveSlider(4)}></button>
            </div>

            <div className="wrapper-holder">
              <div className="slide">
                <video className="w-full h-full rounded-lg overflow-hidden object-cover"
                key={activeSlider} //forces the slider to re-render when the active slider changes
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video[activeSlider]} type="video/mp4" />
                </video>
              </div>
            </div>

          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
