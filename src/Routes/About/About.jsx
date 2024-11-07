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

                <section>
                    <h1 className='text-4xl font-bold mb-5 mt-28'>What We Do</h1>
                    <p>Tours and Trips Bangladesh is a local tour operator in Bangladesh with vision to provide the best possible tourism solutions in a smooth way for our valued guests while having a Vacation in Bangladesh. We are committed to provide our guests the Bangladesh tour Packages and also to offer our Bangladesh Budget tour Packages and to give you best Bangladesh holiday packages. Our holiday packages in Bangladesh are design to give you real Bangladesh. Holiday tour in Bangladesh will bring you close to people and you while you travel in Bangladesh you will always want to come back again. We offer the cheap tour package in Bangladesh that will fit in your budget. Our tours are guided tour in Bangladesh to make thing smooth also you can hire transportations only. We do Rocket Steamer and Back water tour to Barisal Floating Market. We offer unforgettable tour to Mangrove Sunderban .</p>
                </section>
                <section>
                    <h1 className='text-4xl font-bold mb-5 mt-10'> Responsible Tourism</h1>
                    <p className='mb-4'>Responsible tourism is about being conscious travelers who positively impact the places we visit. It recognizes that our actions have consequences and aims to minimize any negative effects on local communities, cultures, and ecosystems. For instance, respecting wildlife by observing from a distance rather than interacting directly ensures that natural habitats remain undisturbed and animals remain safe. Additionally, opting for eco-friendly accommodations that prioritize sustainable practices like solar power, water conservation, and waste reduction supports environmental protection.</p>
                    <p>Another key aspect is promoting education and awareness among travelers. Learning about the history and heritage of a destination fosters appreciation and respect, reducing the likelihood of harmful behavior. By choosing tour operators and travel companies that prioritize responsible tourism, you contribute to a global movement towards ethical and sustainable travel. This approach ensures that generations to come can continue to enjoy these unique places, keeping their beauty and cultural significance intact. Responsible tourism is ultimately about creating meaningful travel experiences that benefit both visitors and local hosts.</p>
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