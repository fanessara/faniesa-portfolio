import React from 'react';

function SingleInfo({text, image})  {
  return (
    <div className='flex gap-4 items-center justify-start'>
    <image className='text-3xl'/>
    <p>{text}</p>
    </div>
  );
};

export default SingleInfo;