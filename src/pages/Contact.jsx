import { useState } from 'react';
import { useFormValidation } from '../utils/hooks';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validationRules = {
    name: (value) => !value ? 'Name is required' : '',
    email: (value) => {
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
      return '';
    },
    phone: (value) => !value ? 'Phone number is required' : '',
    checkIn: (value) => !value ? 'Check-in date is required' : '',
    checkOut: (value) => !value ? 'Check-out date is required' : '',
    guests: (value) => !value || value < 1 ? 'Number of guests is required' : '',
    message: (value) => !value ? 'Message is required' : ''
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    resetForm
  } = useFormValidation({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'Ocean View Suite',
    message: ''
  }, validationRules);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', values);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      resetForm();

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <div className="divider bg-gold-500 mb-4"></div>
          <p className="text-xl md:text-2xl font-light delay-200 opacity-0 animate-fade-in-up">
            We're Here to Help Plan Your Perfect Stay
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Booking Enquiry
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitSuccess && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 mb-6 animate-fade-in">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">✓</span>
                    <div>
                      <h4 className="font-bold">Thank you for your enquiry!</h4>
                      <p className="text-sm">We'll contact you shortly to confirm your booking.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.name && errors.name ? 'border-red-500' : ''}
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.email && errors.email ? 'border-red-500' : ''}
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.phone && errors.phone ? 'border-red-500' : ''}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Check-in & Check-out */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={values.checkIn}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      min={new Date().toISOString().split('T')[0]}
                      className={touched.checkIn && errors.checkIn ? 'border-red-500' : ''}
                    />
                    {touched.checkIn && errors.checkIn && (
                      <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={values.checkOut}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      min={values.checkIn || new Date().toISOString().split('T')[0]}
                      className={touched.checkOut && errors.checkOut ? 'border-red-500' : ''}
                    />
                    {touched.checkOut && errors.checkOut && (
                      <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
                    )}
                  </div>
                </div>

                {/* Guests & Room Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={values.guests}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      min="1"
                      max="10"
                      className={touched.guests && errors.guests ? 'border-red-500' : ''}
                    />
                    {touched.guests && errors.guests && (
                      <p className="text-red-500 text-sm mt-1">{errors.guests}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Room Type
                    </label>
                    <select
                      name="roomType"
                      value={values.roomType}
                      onChange={handleChange}
                    >
                      <option>Ocean View Suite</option>
                      <option>Presidential Villa</option>
                      <option>Garden Deluxe Room</option>
                      <option>Beachfront Bungalow</option>
                      <option>Sunset Penthouse</option>
                      <option>Tropical Pool Villa</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests / Message *
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="5"
                    placeholder="Tell us about any special requirements or preferences..."
                    className={touched.message && errors.message ? 'border-red-500' : ''}
                  ></textarea>
                  {touched.message && errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      123 Paradise Island<br />
                      Tropical Bay, TB 12345<br />
                      Private Island Resort
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      +91 555 123 4567<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      reservations@luxuryresort.com<br />
                      info@luxuryresort.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white text-xl">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-1">
                      Concierge Hours
                    </h3>
                    <p className="text-gray-600">
                      24/7 Service Available<br />
                      Always here to assist you
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              {/* <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Interactive Map</p>
                </div>
              </div> */}



              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.968115667187!2d75.86567847393208!3d22.692230828577713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce50167a359%3A0x6585928e0ae7d0b3!2sBhawarkuan%20Police%20Station!5e0!3m2!1sen!2sin!4v1770959865754!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>







              {/* Social Links */}
              {/* <div className="mt-8">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {['📘', '📷', '🐦', '💼'].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-navy-900 hover:bg-gold-500 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
