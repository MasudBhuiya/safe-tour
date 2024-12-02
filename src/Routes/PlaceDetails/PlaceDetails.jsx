import React from "react";
import { useLoaderData } from "react-router-dom";

const PlaceDetails = () => {
  const tour = useLoaderData();

  return (
    <div className="min-h-screen bg-white text-gray-800 z-10 mt-16">

      {/* Hero Section */}
      <section className="relative h-[80vh] z-10 overflow-hidden">
        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transform scale-105 transition-all duration-700 ease-in-out hover:scale-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4" style={{ zIndex: 3 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">{tour.name}</h1>
          <p className="mt-4 text-lg md:text-xl opacity-80">{tour.location}</p>
          <button className="mt-8 px-10 py-4 bg-orange-600 hover:bg-orange-700 rounded-full text-lg shadow-lg transform hover:scale-105 transition">Book Now</button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-6 space-y-20">
        {/* About Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About the Tour</h2>
          <p className="text-lg leading-relaxed text-gray-600">{tour.about}</p>
        </section>

        {/* Highlights Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tour.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-4">
                  {`Highlight ${index + 1}`}
                </h3>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(tour.price).map(([category, price], index) => (
              <div key={index} className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold capitalize">{category}</h3>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">৳{price}</p>
              </div>
            ))}
          </div>
        </section>

       {/* Best Time to Travel */}
{/* Best Time to Travel */}
<section className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
    <span className="material-icons text-orange-500 mr-3">calendar_today</span>
    Best Time to Travel
  </h2>
  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
    {tour.bestTimeToTravel}
  </p>
</section>

{/* Transportation */}
<section className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md mt-6 sm:mt-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
    <span className="material-icons text-orange-500 mr-3">directions_bus</span>
    Transportation Options
  </h2>
  <ul className="space-y-4">
    {tour.transportation.map((option, index) => (
      <li
        key={index}
        className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
      >
        <span className="material-icons text-orange-500 mr-3">directions</span>
        <p className="text-base sm:text-lg text-gray-700">{option}</p>
      </li>
    ))}
  </ul>
</section>

{/* Wear Suggestions */}
<section className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-md mt-6 sm:mt-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
    <span className="material-icons text-orange-500 mr-3">checkroom</span>
    What to Wear
  </h2>
  <ul className="space-y-4">
    {tour.wear.map((item, index) => (
      <li
        key={index}
        className="flex items-center bg-white p-4 rounded-lg shadow-sm"
      >
        <span className="material-icons text-orange-500 mr-3">wardrobe</span>
        <p className="text-base sm:text-lg text-gray-700">{item}</p>
      </li>
    ))}
  </ul>
</section>




        {/* Included / Not Included */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">Included</h3>
            <ul className="space-y-4 text-gray-700">
              {tour.included.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-orange-500 mr-3">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Not Included</h3>
            <ul className="space-y-4 text-gray-700">
              {tour.notIncluded.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-500 mr-3">✖</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Spots Going Places */}
<section>
  <h2 className="text-4xl font-bold text-gray-900 mb-6">Attraction Spots</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {tour.spotsGoingPlaces.map((spot, index) => (
      <div key={index} className="rounded-lg overflow-hidden shadow-md">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
        <h3 className="text-2xl font-bold mt-4 text-center mb-8">{spot.name}</h3>
      </div>
    ))}
  </div>
</section>



        {/* Reviews */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Reviews</h2>
          <div className="space-y-6">
            {tour.reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800">{review.reviewer}</h4>
                <p className="text-sm text-orange-500">Rating: {review.rating} ★</p>
                <p className="mt-4 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-2">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Safe Tour. All rights reserved.</p>
          <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-lg shadow-md">Contact Us</button>
        </div>
      </footer>
    </div>
  );
};

export default PlaceDetails;
