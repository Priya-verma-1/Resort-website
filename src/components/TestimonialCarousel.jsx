import { useState, useEffect } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-gold-500' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Content */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                {/* Quote Icon */}
                <div className="text-gold-500 text-6xl font-display mb-4 opacity-30">
                  "
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4 space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-6 italic">
                  {testimonial.comment}
                </p>

                {/* Author */}
                <div className="text-center">
                  <h4 className="font-display text-xl font-bold text-navy-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold-500 text-sm flex items-center justify-center space-x-2 mt-1">
                    <span>📍</span>
                    <span>{testimonial.location}</span>
                    {testimonial.verified && (
                      <span className="text-green-500" title="Verified Guest">
                        ✓
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gold-500 text-navy-900 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none z-10"
        aria-label="Previous testimonial"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gold-500 text-navy-900 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none z-10"
        aria-label="Next testimonial"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? 'bg-gold-500 w-8'
                : 'bg-gray-300 hover:bg-gold-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
