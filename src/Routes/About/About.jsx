import React from 'react';
import '../About/About.css'
import ChooseUs from '../ChooseUs';
import NewsLetter from '../Home/NewsLetter';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const About = () => {
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
                        <h1 className="mb-5 text-5xl md:text-8xl font-bold">About Us</h1>

                    </div>
                </div>
            </div>



            <div className='max-w-[1440px] mx-auto px-4'>
                {/* who we are section  */}
                <section className='grid md:grid-cols-2  justify-between items-center gap-8 mt-20 md:mt-36 px-4'>
                    <div >
                        <p className='font-semibold text-orange-500'>Who we are</p>
                        <h1 className='font-bold text-5xl lg:text-6xl my-3'>We are best <br />Tourist operator</h1>
                        <p className='max-w-[528px]'>We are a small family owned, award-winning operation that specializes in providing highly personalized service to our discerning clientele. Our goal is to exceed your expectations and make your trip an unforgettable experience.</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co.com/FVRjGTz/image-873.png" alt="" />
                    </div>
                </section>

                <ChooseUs></ChooseUs>

                {/* tour guide section  */}
                <section className='mt-28 mb-32'>
                    <h1 className='text-2xl font-bold md:text-5xl mb-16 text-center'>Meet our tour guides</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        <div>
                            <img className='w-full' src="https://i.ibb.co.com/85nnh0z/Rectangle-4403.png" alt="" />
                            <div className='flex  mt-3 justify-between'>
                                <div className=''>
                                    <h1 className='text-2xl font-bold '>Hasan Ahmed</h1>
                                    <p>Adventure master</p>
                                </div>
                                <div className='flex gap-3 text-gray-500 mt-2'>
                                    <FaFacebook></FaFacebook>
                                    <FaTwitter></FaTwitter>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className='w-full' src="https://i.ibb.co.com/hVMYppV/Rectangle-4404.png" alt="" />
                            <div className='flex  mt-3 justify-between'>
                                <div className=''>
                                    <h1 className='text-2xl font-bold '>Mosqur Alam</h1>
                                    <p>Adventure master</p>
                                </div>
                                <div className='flex gap-3 text-gray-500 mt-2'>
                                    <FaFacebook></FaFacebook>
                                    <FaTwitter></FaTwitter>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className='w-full' src="https://i.ibb.co.com/TkLdDtM/Rectangle-4405.png" alt="" />
                            <div className='flex  mt-3 justify-between'>
                                <div className=''>
                                    <h1 className='text-2xl font-bold '>Foysal Khan</h1>
                                    <p>Adventure master</p>
                                </div>
                                <div className='flex gap-3 text-gray-500 mt-2'>
                                    <FaFacebook></FaFacebook>
                                    <FaTwitter></FaTwitter>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <NewsLetter></NewsLetter>
                </div>
            </div>

        </div>
    );
};

export default About;