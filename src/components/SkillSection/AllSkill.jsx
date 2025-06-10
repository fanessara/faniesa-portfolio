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

const AllSkill = () => {
  return ( 
  <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skill.map((item,index) =>{
           return ( 
           <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
           );
        })}
      </div>
    </div>
  );
};

export default AllSkill;