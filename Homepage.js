import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative bg-green-700 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Maharashtra Bhoomi</h1>
        <p className="text-xl mb-6">Discover, Predict, and Connect with the Land of Maharashtra.</p>
        <Link to="/predict">
          <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
            Predict Now
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          <FeatureCard 
            title="🌾 Crop Prediction" 
            description="Get the best crops based on your soil and weather conditions." 
          />
          <FeatureCard 
            title="🌟 Expert Advice" 
            description="Connect with agricultural experts for personalized guidance." 
          />
          <FeatureCard 
            title="☀️ Weather Updates" 
            description="Access real-time weather updates to plan your farming activities." 
          />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <ul className="space-y-4 text-lg">
          <li>🌾 Kharif Planning Webinar - May 5, 2025</li>
          <li>🚜 Smart Farming Techniques Workshop - June 10, 2025</li>
          <li>🌿 Organic Farming Fair - July 20, 2025</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Farmers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard 
            quote="Maharashtra Bhoomi helped me choose better crops. My income doubled!" 
            stars={5}
          />
          <TestimonialCard 
            quote="The expert advice feature is fantastic and easy to use." 
            stars={4}
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-700 text-white text-center py-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-green-300">Instagram</a>
          <a href="#" className="hover:text-green-300">Facebook</a>
          <a href="#" className="hover:text-green-300">LinkedIn</a>
        </div>
        <p>© 2025 Maharashtra Bhoomi. All rights reserved.</p>
      </footer>

    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

// TestimonialCard Component
const TestimonialCard = ({ quote, stars }) => (
  <div className="bg-white p-6 rounded-lg shadow text-center">
    <p className="italic mb-4">"{quote}"</p>
    <div className="text-yellow-400 text-xl">
      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
    </div>
  </div>
);

export default Homepage;
