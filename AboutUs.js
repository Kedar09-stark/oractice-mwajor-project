import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mt-5">
            {/* Heading */}
            <h2 className="text-center text-success mb-4">About Us</h2>

            {/* Introduction Section */}
            <div className="text-center mb-4">
                <p className="lead">
                    Welcome to our Crop Yield Prediction app! We aim to help farmers predict the yield of their crops based on various factors like rainfall, area, district, season, and soil quality. Our goal is to improve agricultural practices and assist in better planning and decision-making.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mb-5">
                <h4 className="text-muted">Our Mission</h4>
                <p>
                    Our mission is to use data-driven insights to empower farmers with accurate crop yield predictions, ensuring they can plan their harvests and resources more effectively, thus contributing to the agricultural industry’s growth.
                </p>
            </div>

            {/* Features Section */}
            <div className="mb-5">
                <h4 className="text-muted">What We Offer</h4>
                <ul>
                    <li>Accurate crop yield prediction based on weather and soil conditions.</li>
                    <li>Data-driven insights to help farmers make informed decisions.</li>
                    <li>User-friendly interface for easy access to prediction tools.</li>
                    <li>Comprehensive analysis of various factors affecting crop yields.</li>
                </ul>
            </div>

            {/* Future Features Section */}
            <div className="mb-5">
                <h4 className="text-muted">What's Coming Next?</h4>
                <p>
                    In the future, we plan to develop even more complex functionalities to enhance the user experience. Some of the features we’re working on include:
                </p>
                <ul>
                    <li>Crop recommendations based on predicted yields and various environmental factors.</li>
                    <li>Detailed district information to help farmers make more localized decisions.</li>
                    <li>Integration of advanced weather and soil data analytics for even more accurate predictions.</li>
                    <li>Real-time updates and alerts to help farmers respond to changing conditions effectively.</li>
                </ul>
            </div>

            {/* Contact Info Section */}
            <div>
                <h4 className="text-muted">Contact Us</h4>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>
                <p>Email: <a href="mailto:support@maharathrabhoomi.com" className="text-success">support@maharathrabhoomi.com</a></p>
                <p>Phone: <a href="tel:+917499657836" className="text-success">+91 7499657836</a></p>
            </div>

            <div className="container text-center mt-5">
                <footer className="bg-dark text-white ">
                    <p className="mb-0">&copy; 2025 Harish | Happy Coding!</p>
                </footer>
            </div>
        </div>
    );
};

export default AboutUs;
