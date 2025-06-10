import React from 'react';

function SingleContactSocial ({icon, link}) {
  return (
    <div className='text-2xl h-12 w-12 border border-lightblue text-slateblue rounded-full p-3 flex items-center justify-center'>
        <a href={link} className='cursor-pointer'>
            <icon/>
        </a>
    </div>
  );
};

export default SingleContactSocial;