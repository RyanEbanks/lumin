"use client"; // Ensures this is a Client Component
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../redux/colorSlice';
import { RootState } from '../redux/store';
import Navigation from '../navigation/page';
import { useState } from 'react';

export default function Services() {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: RootState) => state.color.selectedColor);
  const [activeIndex, setActiveIndex] = useState(0); 
  const items = ['headphones/red.svg', 'headphones/green.svg', 'headphones/blue.svg']

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  const headphoneColors = [
    "headphones/red.svg",
    "green",
    "blue"
  ];

  return (
    <div className='service'>
      <div className='service-container'>
        <div className="lumin-content-container">
          <div className="service-title">
            <h1>Lumin</h1>
          </div>
          <div className="service-content">
            <h1>Core Wireless Headphones.</h1>
            <p>Sleek, over-ear design with memory foam ear cups and a lightweight aluminum frame. Touch-sensitive ear cups for volume, track control, and calls.
              Built-in voice assistant support (Siri, Google Assistant, Alexa). Customizable EQ through a mobile app.
            </p>
            <h1>Coming Soon. . .</h1>
          </div>
        </div>
        <div className="lumin-image-container">
          <div className="list">
            <div className="item">
              <img src={`headphones/red.svg`} alt={selectedColor} className='service-img' />
            </div>
            <div className="item">
              <img src={`headphones/green.svg`} alt={selectedColor} className='service-img' />
            </div>
            <div className="item">
              <img src={`headphones/blue.svg`} alt={selectedColor} className='service-img' />
            </div>
          </div>
          <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}