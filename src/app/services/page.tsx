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
  const [items, setItems] = useState(['headphones/hRed-2.svg', 'headphones/hGreen-2.svg', 'headphones/hBlue-2.svg']);
  const positions = ['item-1', 'item-2', 'item-3'];

  function cycleImages(direction: number) {
    let newItems = [...items];

    if (direction === 1) {
      const firstItem = newItems.shift(); //shift adds an element to the back of an array
      if (firstItem !== undefined) {
        newItems.push(firstItem);
      }
    } else if (direction === -1) {
      const thirdItem = newItems.pop(); //unshift adds an element to the front of an array
      if (thirdItem !== undefined) {
        newItems.unshift(thirdItem);
      }
    }

    setItems(newItems);
  }

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
            {items.map((id, index) => (
              <div key={id} id={`item-${index + 1}`} className="item">
                <img src={`${items[index]}`} alt={selectedColor} className='service-img' />
              </div>
            ))}
            <div className="arrows">
              <button id="prev" onClick={() => cycleImages(-1)}>&lt;</button>
              <button id="next" onClick={() => cycleImages(1)}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}