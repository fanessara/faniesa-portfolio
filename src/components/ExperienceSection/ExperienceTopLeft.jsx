import React from 'react'
import InfoExperience from './InfoExperience'

function ExperienceTopLeft() {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-peachypink font-bold uppercase text-3xl font-special text-center'>Since 2021</p>
        <div className='flex justify-center items-center gap-4'>
            <InfoExperience number="2" text="Years"/>
            <p className='font-bold text-6xl text-lightBrown'></p>
            <InfoExperience number="2" text="Company"/>
        </div>
        <p className='text-center text-white'>Sebelum saya kuliah bidang IT, saya memiliki beberapa pengalaman kerja sebagai Sales Consultant/ Sales Advisor, dan ketika saya memutuskan untuk menyelesaikan kontrak kerja saya, saya fokus pada bidang IT</p>
    </div>
  )
}

export default ExperienceTopLeft