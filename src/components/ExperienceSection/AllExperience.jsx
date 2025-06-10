import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa6";


const experiences = [
  {
    company:"PT Optik Tunggal Sempurna.",
    job:"Sales Consultant Refraksi Optik.",
    date:"2023.",
    jobdesk: [
      "Berorientasi pada penjualan dan target.",
      "Membina hubungan baik dengan customer.",
      "Mengatasi komplain dan keluhan.",
      "Periksa Mata.", 
    ],
  },
  {
    company:"PT Matahari Department Store.",
    job:"Sales Advisor.",
    date:"2022.",
    jobdesk: [
      "Berorientasi pada penjualan dan target.",
      "Membina hubungan baik dengan customer.",
      "Membuat laporan kegiatan penjualan.",
    ],
  },
  {
    company:"Magang di Badan Pertanahan Nasional Kantor Kota Medan",
    job:"Assisten Arsip",
    date:"2016",
    jobdesk: [
      "Mengarsipkan sertefikat tanah.",
      "Menangani Pengantrian atau loket pengurusan tanah.",
      "Mengeluarkan surat ukur dari sertefikat tanah untuk di proses.",
    ],
  },
];


function AllExperience() {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience, index)=>{
        return (
          <>
        <SingleExperience key={index} experience={experience}/>;
        {index < 2 ? (
        <FaArrowRight className='text-6xl text-peachypink lg:block sm:hidden'/>
        ) : (
          ""
          )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;