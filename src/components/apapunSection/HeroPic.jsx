import React from 'react';
import { PiHexagonLight } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <img src={`${import.meta.env.BASE_URL}public/faniesa.png`} alt="Faniesa Ramadhani" className='max-h-[300px] max-w-[300px] object-cover rounded-lg widw-auto ' />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonLight className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </div>

  );
};

export default HeroPic;