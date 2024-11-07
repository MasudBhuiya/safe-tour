import React from 'react';
import NewsLetter from '../Home/NewsLetter';

const Blog = () => {
    const blogPosts = [
        {
            title: 'Safety Tips for Travelers',
            content:
                'Learn essential safety tips for traveling, including how to secure valuables, stay healthy, and avoid risky situations.',
        },
        {
            title: 'Responsible and Sustainable Tourism',
            content:
                'Discover how to be a responsible traveler by reducing your footprint, respecting local customs, and supporting local communities.',
        },
        {
            title: 'Packing and Preparation Guides',
            content:
                'Find the ultimate packing lists, essential travel documents checklist, and top travel apps to make your trip smooth and safe.',
        },
        {
            title: 'Safe Destinations for Families and Solo Travelers',
            content:
                'Explore our recommendations for family-friendly and solo-safe travel destinations with unique attractions.',
        },
        {
            title: 'Health, Wellness, and Mental Well-being',
            content:
                'Stay healthy while traveling with fitness tips, mental wellness strategies, and emergency preparedness advice.',
        },
        {
            title: 'Travel Technology and Security',
            content:
                'Enhance your travel security with tips on cybersecurity, must-have travel gadgets, and personal data protection.',
        },
        {
            title: 'Emergency Preparedness and Crisis Management',
            content:
                'Learn how to handle emergencies while traveling, from medical crises to lost passports, with our comprehensive guides.',
        },
        {
            title: 'Budgeting Tips for Safe Travel',
            content:
                'Find out how to budget effectively for safe travel without compromising comfort, plus tips on avoiding common scams.',
        },
        {
            title: 'COVID-19 and Travel Safety',
            content:
                'Stay informed about current travel restrictions, post-pandemic hygiene tips, and safety protocols.',
        },
    ];

    return (
        <>
        {/* Hero Section */}

        <div
                className="hero h-72 sm:min-h-screen w-full"
                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-photo/beautiful-girl-standing-rock-james-bond-island-phang-nga-thailand_335224-1225.jpg?ga=GA1.1.1591777397.1730875381&semt=ais_hybrid)",
                }}>
                <div className=""></div>
                <div className="hero-content text-orange-500 text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold  mb-4">Safe Travel Blog</h1>
                        <p className="text-lg text-black font-semibold max-w-lg mx-auto">
                            Empowering you with tips, guides, and inspiration for safe and responsible travel.
                        </p>
                        <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition duration-300">
                            Start Exploring
                        </button>

                    </div>
                </div>
            </div>
        
       
        <div className="text-black max-w-[1440px] mx-auto py-8 px-4 mt-28">
            

            {/* Featured Articles Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold  mb-6 text-center">Featured Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.slice(0, 2).map((post, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg text-gray-800 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-base mb-4">{post.content}</p>
                            </div>
                            <button className="mt-auto btn bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
                                Explore
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blog Grid Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold  mb-6 text-center">Latest Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg text-gray-800 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-base mb-4">{post.content}</p>
                            </div>
                            <button className="mt-auto w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Signup Section */}
            {/* <section className="bg-white text-gray-900 py-10 rounded-lg shadow-lg mb-12 text-center max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Join Our Travel Community</h2>
        <p className="mb-6">
          Subscribe to get updates on the latest travel tips, destinations, and guides straight to your inbox.
        </p>
        <form className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
            Subscribe
          </button>
        </form>
      </section> */}

            <section>
                <NewsLetter></NewsLetter>
            </section>

            {/* Popular Topics Section */}
            <section className="text-center mt-20">
                <h2 className="text-3xl font-semibold  mb-6">Popular Topics</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    {['Family Adventures', 'Travel Safety', 'Eco-Friendly Destinations', 'Wellness Tips', 'Solo Travel'].map(
                        (topic, index) => (
                            <button
                                key={index}
                                className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-400 transition duration-300"
                            >
                                {topic}
                            </button>
                        )
                    )}
                </div>
            </section>
        </div>
        </>
    );
};

export default Blog;
