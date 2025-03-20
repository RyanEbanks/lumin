"use client";
import Navigation from "./navigation/page";
import Footer from "./footer/page";
import { useEffect, useState } from "react";
import About from "./about/page";
import Services from "./services/page";
import '../styles/style.css'
export default function Home() {
  const [activeSlider, setActiveSlider] = useState(0)

  const video = [
    'videos/lumin_1.mp4',
    'videos/lumin_5.mp4',
    'videos/new_lumin_2.mp4',
    'videos/lumin_3.mp4',
    'videos/lumin_4.mp4',
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlider(prevSlider => (prevSlider >= 4 ? 0 : prevSlider + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main className="home">
        <div className="home-container">
          {/* <img src={darkMode ? "LUMIN-dark-theme.svg" : "LUMIN logo.svg"} alt="website logo" className="w-[150px] h-[150px] mr-10" /> */}
          {/* Fix this */}
          <img src="LUMIN-dark-theme.svg" alt="website logo" className="lumin-logo" />
          {/* Slider Wrapper */}
          <div className="slider-wrapper">

            <div className="slider-btn-holder">
              <button id="slide-1" className={`slider-btn ${activeSlider === 0 ? "active" : "inactive"}`} onClick={() => setActiveSlider(0)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 1 ? "active" : "inactive"}`} onClick={() => setActiveSlider(1)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 2 ? "active" : "inactive"}`} onClick={() => setActiveSlider(2)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 3 ? "active" : "inactive"}`} onClick={() => setActiveSlider(3)}></button>
              <button id="slide-1" className={`slider-btn ${activeSlider === 4 ? "active" : "inactive"}`} onClick={() => setActiveSlider(4)}></button>
            </div>

            <div className="wrapper-holder">
              <div className="slide">
                <video className="video-container"
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
        {/* <div className="home-text-container">
          <div className="home-text-child-container-scroll">
            <p className="text-for-line-animation">SCROLL</p>
            <div className="line-animation"></div>
          </div>
          <div>
            <button className="home-text-child-container-discover">
              Discover
              <img src="Arrow.svg" alt="right arrow" />
            </button>
          </div>
          <div className="home-text-child-container-scroll">
            <p className="text-for-line-animation">SCROLL</p>
            <div className="line-animation"></div>
          </div>
        </div> */}
        {/* <Services /> */}
        <Navigation />
        {/* <About /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
