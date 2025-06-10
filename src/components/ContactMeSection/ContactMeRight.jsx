import React from 'react'
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';

function ContactMeRight() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src={`${Iimport.meta.env.BASE_URL}public/faniesadokumen/contactme.png`} alt="Contact Me" className='max-w-[300px]'/>
      <ContactInfo/>
      <ContactSocial/>


    </div>
  );
};

export default ContactMeRight;