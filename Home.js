import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/predict');
  };

  return (
    <div className="font-sans bg-gradient-to-br from-green-200 via-yellow-100 to-pink-200 min-h-screen">

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-4 fixed top-0 left-0 w-full shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-8">
          <h1 className="text-2xl font-bold">Maharashtra Bhoomi</h1>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300">About Us</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen pt-24 bg-gradient-to-br from-green-300 via-green-100 to-yellow-100">
        <h1 className="text-5xl font-extrabold mb-6 text-green-800">Welcome to Maharashtra Bhoomi</h1>
        <p className="text-xl mb-8 text-green-700">
          Empowering farmers with crop yield predictions and smart farming insights.
        </p>
        <div className="flex space-x-6">
          <button
            onClick={handleStart}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-110"
          >
            Get Started
          </button>
          <Link
            to="/about"
            className="bg-white text-pink-600 font-bold py-3 px-6 rounded-full border-2 border-pink-400 hover:bg-pink-100 shadow-lg transition transform hover:scale-110"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <h1 className="text-5xl font-bold text-pink-500">Tailwind is finally working!! 🚀</h1>

      <section className="py-20 bg-gradient-to-r from-yellow-200 via-pink-100 to-purple-200">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-pink-700 mb-10">Why Choose Maharashtra Bhoomi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white bg-opacity-80 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-green-700 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pink-300 via-red-200 to-yellow-100 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8 text-gray-700">
          Join Maharashtra Bhoomi today and take the first step towards smarter farming!
        </p>
        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-110"
        >
          Start Now
        </button>
      </section>

    </div>
  );
};

const features = [
  {
    img: "https://source.unsplash.com/300x200/?data,analytics",
    title: "Accurate Predictions",
    description: "Get precise crop yield predictions based on real-time data and AI models.",
  },
  {
    img: "https://source.unsplash.com/300x200/?farmer,technology",
    title: "Farmer-Centric Insights",
    description: "Custom recommendations designed to boost your farm productivity.",
  },
  {
    img: "https://source.unsplash.com/300x200/?sustainability,farming",
    title: "Sustainable Agriculture",
    description: "Drive future farming innovations while preserving the environment.",
  },
];

export default Home;
