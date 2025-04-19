import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center text-success mb-4">Contact Us</h2>
            <p className="text-center text-muted mb-4">
                We would love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us.
            </p>

            {/* Contact Info Section */}
            <div className="mb-5">
                <h5 className="text-muted">Our Contact Details</h5>
                <p>Email: <a href="mailto:support@maharathrabhoomi.com" className="text-success">support@maharathrabhoomi.com</a></p>
                <p>Phone: <a href="tel:+917499657836" className="text-success">+91 7499657836</a></p>
            </div>

            {/* Contact Form */}
            <h5 className="text-muted mb-3">Send Us a Message</h5>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" rows="4" className="form-control" placeholder="Enter your message" required></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">Send Message</button>
            </form>

            <div className="container text-center mt-5">
                <footer className="bg-dark text-white ">
                    <p className="mb-0">&copy; 2025 Harish | Happy Coding!</p>
                </footer>
            </div>
        </div>


    );
};

export default ContactUs;
