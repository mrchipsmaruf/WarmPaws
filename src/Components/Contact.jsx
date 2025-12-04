import React from "react";

const Contact = () => {
    return (
        <div className="bg-orange-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Contact <span className="text-orange-600">Us</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left - Info Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Get in Touch</h3>
                        <p className="text-gray-600 mb-6">
                            We'd love to hear from you! Whether you have questions, feedback, or want 
                            to adopt or support — feel free to reach out.
                        </p>

                        <div className="space-y-4 text-gray-700">
                            <p><strong>📍 Address:</strong> Narayanganj, Dhaka, Bangladesh</p>
                            <p><strong>📞 Phone:</strong> +880 1813-912607</p>
                            <p><strong>📧 Email:</strong> support@warmpaws.com</p>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <form className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Send a Message</h3>

                        <div className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />

                            <textarea
                                placeholder="Your Message"
                                className="w-full p-3 border rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 duration-300"
                            >
                                Send Message
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
