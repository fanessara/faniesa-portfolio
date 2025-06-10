import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import SingleInfo from './SingleInfo';

function ContactInfo() {
  return (
    <div className='flex flex-col gap-4 text-white font-bold'>
        <SingleInfo text="ramadhanifaniesa@gmail.com" image={MdOutlineEmail }/>
        <SingleInfo text="+6289635678186" image={BsWhatsapp}/>
        <SingleInfo text="Jl. Rahmadsyah Gg. Dame No.2A" image={FaLocationDot}/>
    </div>
  );
};

export default ContactInfo;