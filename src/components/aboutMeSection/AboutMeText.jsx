import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center '>
          <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
            <p className='text-white'> Saya adalah Mahasiswa Sistem Informasi Teknologi yang memiliki passion di bidang IT, saat ini saya sedang mendalami di bidang Web Developement dan Cyber Security. <br /> Dibidang Web Developer, saya suka belajar cara membangun website yang menarik, responsif, dan mudah digunakan. Mulai dari front-ent sampai back-end, saya terus belajar agar bisa membuat web yang nggak cuma bagus dilihat tapi juga kuat secara fungsional. <br />Sementara Itu, disisi Cyber Security, saya tertarik dengan bagaimana sistem bisa tetap aman dari berbagai ancaman digital <br />Saya suka belajar tentang celah keamanan, cara kerja hacker, dan bagaimana kita bisa melindungi data dari hal hal yanng tidak diinginkan</p>
            <button className='border border-peachypink rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-peachypink transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  );
}

export default AboutMeText