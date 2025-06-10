import React from 'react';

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightblue text-lightblue flex justify-around uppercase xl:text-4xl md-2xl sm:text-4xl py-8 items-center gap-4 bg-slateblue'>
        <p className='md:block sm:hidden'>Time Management</p>
        <p className='md:block sm:hidden'>Team Colaboration</p>
        <p>Adaptability</p>
    </div>
  );
};

export default SubHeroSection;