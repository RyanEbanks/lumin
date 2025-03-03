"use client"; // Ensures this is a Client Component
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../redux/colorSlice';
import { RootState } from '../redux/store';

export default function Services () {
    const dispatch = useDispatch();
    const selectedColor = useSelector((state: RootState) => state.color.selectedColor);

    return(
        <div className="text-center">
      <h2>Selected Color: {selectedColor}</h2>
      <div className='bg-white rounded-md h-[500px] w-[500px] mx-auto'>
      <img src={`headphones/${selectedColor}.svg`} alt={selectedColor} className='w-[400px] h-[400px] m-auto' />
      </div>

      <div className="mt-4">
        {["black", "blue-purple", "chroma", "gold", "pink", "red-blue"].map((color) => (
          <button
            key={color}
            className={`px-4 py-2 m-2 border rounded ${selectedColor === color ? "bg-gray-400" : ""}`}
            onClick={() => dispatch(setColor(color))}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
    );
}