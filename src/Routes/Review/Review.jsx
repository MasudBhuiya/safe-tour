import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);

    // console.log(rating)

    useEffect(() => {
        fetch('/customersReview.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const from = e.target;

        const name = from.name.value;
        const email = from.email.value;
        const reviewTitle = from.reviewTitle.value;
        const ratings = rating;
        const reviewContent = from.content.value;
        
        console.log(name, email, reviewTitle, ratings, reviewContent )

    }


    return (
        <div>
            <div
                className="hero h-72 sm:min-h-screen w-full"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?ga=GA1.1.1591777397.1730875381&semt=ais_hybrid)",
                }}>
                <div className=""></div>
                <div className="hero-content text-orange-600 text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl md:text-8xl font-bold">Review</h1>
                    </div>
                </div>
            </div>

            <section className='mt-28 max-w-[1440px] mx-auto px- 4'>
                <h1 className='font-bold text-4xl mx-auto text-center max-w-[500px]'>Some Reviews from our valuable customers</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                    {
                        reviews?.map(review => <div className='mb-6 max-w-[90%] mx-auto ' key={review?.id}>
                            <h1 className='text-2xl font-bold mb-3'>{review?.review_title}</h1>
                            <Rating
                                style={{ maxWidth: 100, color: 'yellow' }}
                                value={review?.rating}
                                readOnly
                            />
                            <p className='mt-2  text-gray-500'> {review?.review_content}</p>
                            
                            
                            <p className='mt-3 text-end font-medium me-4'>-{review?.reviewer_name}</p>
                        </div>)
                    }
                </div>
            </section>

            <section className='mt-28 max-w-[1440px] mx-auto px-4 '>
                <h1 className='font-bold text-4xl text-center mb-20'>Submit your review</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <img className='rounded-lg w-full md:w-fit' src="https://img.freepik.com/premium-photo/working-with-travel-agents-online-booking-platforms_1104763-52538.jpg?ga=GA1.1.1591777397.1730875381&semt=ais_hybrid" alt="" />
                    </div>
                    <form onSubmit={handleSubmit} action="">
                        <p className='font-medium mb-1'>Name:</p>
                        <input className='border w-full p-3 rounded-lg mb-4' type="text" name="name" id="" required />
                        <p className='font-medium mb-1'>Email:</p>
                        <input className='border w-full p-3 rounded-lg mb-4' type="email" name="email" id="" required />
                        <p className='font-medium mb-1'>Review Title:</p>
                        <input className='border w-full p-3 rounded-lg mb-4' type="text" name="reviewTitle" id="" required />
                        <p className='font-medium mb-1'>Rating:</p>
                        <Rating
      style={{ maxWidth: 130 }}
      value={rating}
      onChange={setRating}
      isRequired
    />
                        <p className='font-medium mb-1 mt-4'>Review Content:</p>
                        <textarea className='border w-full  p-3 rounded-lg mb-4' rows="5" type="text" name="content" id="" required />
                        <input className='btn bg-orange-500 text-white font-bold px-12' type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Review;