import React from 'react';
import ProjectText from './ProjectText';
import SingleProject from './SingleProject';


const projects =[{
    name: "Solution Challenge",
    year: "2024",
    align: "right",
    image: "../../faniesa dokumen/sertifikat1.png",

},
{
  name: "SAP Analytics Cloud and SAP Build Apss",
  year: "2024",
  align: "left",
  image: "../../faniesa dokumen/sertifikat 2.png",

},
{
  name: "CTF Online Class",
  year: "2024",
  align: "right",
  image: "../../faniesa dokumen/sertifikat3.png",
},


];

function ProjecMain() {
  return (
    <div id='project' className='max-w-[1200px] mx-auto px-4'>
        <ProjectText/>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item,index) =>{
              return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image}/>
            })}
        </div>
    </div>
  );
};

export default ProjecMain;