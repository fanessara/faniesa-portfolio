import React from 'react';

const HeroText = () => {
  return (

      <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
          <h2 className='lg:text-4xl sm:text-xl uppercase text-cyan'>Web Developer</h2>
          <h1 className='md:text-[2.8rem] lg:text-7xl sm:text-4xl font-bold font-special text-peachypink'>Faniesa Ramadhani</h1>
          <p className='text-lg lg:text-1xl mt-6 text-white'>Web Developer bukan cuma soal ngoding, ini tentang menciptakan ruang digital yang hidup. <br /> Dari error yang bikin stres sampai fitur yang akhirnya jalan, semua prosesnya saya nikmati. <br />Website bukan cuma kumpulan kode, tapi cerminan visi, rasa, dan kadang... idealisme yang dibungkus responsif. <br />Kalau kamu lihat hasil kerja saya di sini, semoga kamu juga bisa lihat usaha di baliknya.</p>
      </div>
    

  );
};

export default HeroText;