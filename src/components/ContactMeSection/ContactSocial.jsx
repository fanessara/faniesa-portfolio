import React from 'react'
import SingleContactSocial from './SingleContactSocial';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function ContactSocial() {
  return (
    <div className='flex gap-4'> 
      <SingleContactSocial link='#' icon={FaLinkedinIn}/>
      <SingleContactSocial link='#' icon={FiGithub}/>
      <SingleContactSocial link='#' icon={FaInstagram}/>
    </div>
  );
};

export default ContactSocial;