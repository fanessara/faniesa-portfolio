import React from 'react';
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

import SingleSkill from './SingleSkill';

const skill = [
  {
    skill: "HTML",
    icon: SiHtml5,
  },
  {
    skill: "CSS",
    icon: IoLogoCss3,
  },
  {
    skill: "Java Script",
    icon: SiJavascript,
  },
  {
    skill: "Java",
    icon: RiJavaLine,
  },
  {
    skill: "Python",
    icon: SiPython,
  },
  {
    skill: "React",
    icon: IoLogoReact,
  },
  {
    skill: "TailwindCss",
    icon: BiLogoTailwindCss,
},

];

function AllSkillKU() {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skill.map((item,index)=>{
            return (
            <div key={index} className='flex flex-col items-center'>
                <item.icon className='text-7xl text-peachypink'/>
                <p className='text-center mt-4 text-white'>{item.skill}</p>
            </div>
            );
        })}
    </div>
  );
};

export default AllSkillKU;