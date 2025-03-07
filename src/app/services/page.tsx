"use client"; // Ensures this is a Client Component
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../redux/colorSlice';
import { RootState } from '../redux/store';

export default function Services() {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: RootState) => state.color.selectedColor);

  const headphoneColors = [
    "black", 
    "blue-purple", 
    "chroma", 
    "gold", 
    "pink", 
    "red-blue"
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

      <h1>Trade-In & Upgrade Program ♻️</h1>
      <p>Upgrade your old Lumin headphones for a discount on the latest models. Keep up with innovation while making an eco-friendly choice!</p>
      <h1>Premium Packaging & Gifting Options 🎁</h1>
      <p>Make every purchase feel special with our luxury packaging and personalized gift options—perfect for birthdays, holidays, or just treating yourself.</p>
      <h1>Lumin Care Protection Plan 🔧</h1>
      <p>Extend your warranty and get exclusive repair and replacement services for accidental damage, wear and tear, or technical issues.</p>
    </div>
  );
}