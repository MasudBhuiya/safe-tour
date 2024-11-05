import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoMailOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';

const ContactUs = () => {
  return (
    <div>
      <div
                className="hero h-72 sm:min-h-screen w-full"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/jRVx3zK/image-872-1.png)",
                }}>
                <div className=""></div>
                <div className="hero-content text-orange-500 text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl md:text-7xl font-bold">Contact Us</h1> 
                    </div>
                </div>
            </div>

{/* 
            <section className='md:flex max-w-[1440px] mx-auto items-center h-[60vh]'>

            <div className=' bg-[#ECECEC]  w-full md:w-1/2'>
            <div className=''>
                <div className='flex items-center gap-5 text-lg mb-4'>
                <IoMailOutline />
                <p>2369 Robinson Lane Jackson, OH 45640</p>
                </div>
                <div className='flex  items-center gap-5 text-lg mb-4'>
                <LuPhone />
                <p>(+88) 017 000 00000</p>
                </div>
                <div className='flex  items-center gap-5 text-lg mb-4'>
                <CiLocationOn />
                <p>Info@example.com</p>
                </div>
            </div>
            </div>


            <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col w-[70%]'>
                <input type="text" className='p-3 border rounded-md w-full mb-5 ' placeholder='Name' name="" id="" />
                <input type="email" className='p-3 border rounded-md w-full mb-5 ' placeholder='Email' name="" id="" />
                <input type="text" className='p-3 border rounded-md w-full mb-5 ' placeholder='Subject' name="" id="" /> <br />
                <textarea name="" className='p-3 border rounded-md w-full mb-5 ' id="" rows='4' ></textarea>
            </div>
            </div>
            </section> */}

            <section className='grid grid-cols-1 md:grid-cols-2   md:h-[80vh] items-center gap-6'>
                <div className='flex flex-col items-center justify-center md:bg-[#ECECEC] h-full mt-16 md:mt-0'>
                <div>
                <div className='flex items-center gap-5 text-lg mb-4'>
                <IoMailOutline />
                <p>2369 Robinson Lane Jackson, OH 45640</p>
                </div>
                <div className='flex  items-center gap-5 text-lg mb-4'>
                <LuPhone />
                <p>(+88) 017 000 00000</p>
                </div>
                <div className='flex  items-center gap-5 text-lg mb-4'>
                <CiLocationOn />
                <p>Info@example.com</p>
                </div>
            </div>
                </div>

            <div>
            <div className='w-[75%] mx-auto'>
                <input type="text" className='p-3 border rounded-md w-full mb-5 ' placeholder='Name' name="" id="" />
                <input type="email" className='p-3 border rounded-md w-full mb-5 ' placeholder='Email' name="" id="" />
                <input type="text" className='p-3 border  rounded-md w-full mb-5 ' placeholder='Subject' name="" id="" /> <br />
                <textarea name="" className='p-3 border rounded-md w-full mb-2 ' id="" rows='4' placeholder='Message'></textarea>

                <input className="btn bg-orange-500 text-white px-12" type="submit" name=""  value="Subscribe"
                 id="" />
            </div>
            </div>

            </section>


            <div>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14588.860750054031!2d90.4030438!3d23.917433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1730793930807!5m2!1sbn!2sbd"
  width="100%"
  height="520"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
    </div>
  );
};

export default ContactUs;