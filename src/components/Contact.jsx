import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6z6ut7h', 'template_qcklpqx', form.current, {
            publicKey: '7HvmeRpLX80k6HhK6',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Message Sent..!')
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Failed..!')
            },
          );
      };
  return (
    <div className='mt-20 flex justify-around flex-wrap'>
      <div className='mx-15'>
        <h2 className='text-white text-3xl'>CONTACT</h2>
        <div className='py-10 px-10 md:mt-15'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Name' name="name" className='p-5 my-2 rounded-md block md:w-[300px]' required/>
                <input type="text" placeholder='Email' name='email' className='p-5 my-2 rounded-md block md:w-[300px]' required/>
                <input type="text" placeholder='Phone' name='email' className='p-5 my-2 rounded-md block md:w-[300px]'/>
                <textarea type="text" name='message' placeholder='Message' className='p-5 my-2 rounded-md block' cols={33} rows={10} required></textarea>
                <button className='text-white bg-gradient-to-r from-yellow-600 to-blue-500 px-6 py-3 rounded-lg mt-3'>SEND</button>
            </form>
        </div>
      </div>
      <div className='flex justify-around flex-wrap'>
      <div className='py-10 px-10 md:mt-10'>
        <h3 className='text-yellow-300 text-2xl pt-15'>EMAIL</h3>
        <h4 className='text-gray-400'><a href="kaviigunawardhana2000@gmail.com" target='blank'>kaviigunawardhana2000@gmail.com</a></h4>
        <h3 className='text-yellow-300 text-2xl pt-10'>LINKEDIN</h3>
        <h4 className='text-gray-400'><a href='https://www.linkedin.com/in/kavindu-maleesha-93b952219/' target='blank'>Kavindu Maleesha</a></h4>
        <h3 className='text-yellow-300 text-2xl pt-10'>GITHUB</h3>
        <h4 className='text-gray-400'><a href='https://github.com/Kavimaleesha' target='blank'>Kavindu Maleesha</a></h4>
      </div>
    </div>
    </div>
  )
}

export default Contact
