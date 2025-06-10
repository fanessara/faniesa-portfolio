import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_h4uz1e8',         
      'template_myb4i5a',        
      form.current,
      'dnpIjPIB9fQa3prLW'        
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      alert('Pesan berhasil dikirim!');
      form.current.reset();
    }, (error) => {
      console.log('FAILED...', error.text);
      alert('Gagal mengirim pesan.');
    });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          required
          className="h-12 rounded-lg bg-lightblue px-6 text-slateblue"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="h-12 rounded-lg bg-lightblue px-6 text-slateblue"
        />
        <textarea
          name="message"
          placeholder="Tulis Pesanmu"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-lightblue px-5 text-slateblue "
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};



export default ContactForm;