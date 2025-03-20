"use client"; // Ensures this is a Client Component
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../redux/colorSlice';
import { RootState } from '../redux/store';

export default function Services() {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: RootState) => state.color.selectedColor);

  const headphoneColors = [
    "red",
    "green",
    "blue"
  ]
  
  return (
    <div>
      <div className='service-background p-10 rounded-3xl'>
        <div className='product-background py-10 rounded-3xl'>
          <h2>Selected Color: {selectedColor}</h2>
          <div className='rounded-md h-[500px] w-[500px] mx-auto'>
            <img src={`headphones/${selectedColor}.svg`} alt={selectedColor} className='w-[400px] h-[400px] m-auto' />
          </div>
        </div>

        <div className="mt-4 flex flex-row justify-center">
          {headphoneColors.map((color) => (
            <div className='flex flex-row'>
              <button
                key={color}
                className={`m-2 border rounded-full w-4 h-4 ${selectedColor === color ? "bg-gray-400" : ""}`}
                onClick={() => dispatch(setColor(color))}
              ></button>
              <p>{color}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lumin-content-container">
        <div className="service-title">
          <h1>Lumin</h1>
        </div>
        <div className="service-content">
          <h1>Lumin Core Wireless Headphones.</h1>
          <p>Sleek, over-ear design with memory foam ear cups and a lightweight aluminum frame. Touch-sensitive ear cups for volume, track control, and calls.
          Built-in voice assistant support (Siri, Google Assistant, Alexa). Customizable EQ through a mobile app.
          </p>
          <h1>Coming Soon. . .</h1>
        </div>
      </div>
    </div>
  );
}