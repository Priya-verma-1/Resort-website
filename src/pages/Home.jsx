import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import RoomCard from '../components/RoomCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useIntersectionObserver } from '../utils/hooks';

const Home = () => {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const [heroRef, heroInView] = useIntersectionObserver();
  const [aboutRef, aboutInView] = useIntersectionObserver();
  const [amenitiesRef, amenitiesInView] = useIntersectionObserver();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [roomsData, amenitiesData, testimonialsData] = await Promise.all([
          api.getFeaturedRooms(),
          api.getAmenities(),
          api.getTestimonials()
        ]);
        setFeaturedRooms(roomsData);
        setAmenities(amenitiesData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        {/* Content */}
        <div ref={heroRef} className="relative z-10 text-center text-white px-4">
          <div className={`opacity-0 ${heroInView ? 'animate-fade-in-up' : ''}`}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider">
              LUXURY RESORT
            </h1>
            <div className="divider bg-gold-500 mb-6"></div>
            <p className="text-xl md:text-2xl mb-8 font-light tracking-wide delay-200 opacity-0 animate-fade-in-up">
              Where Paradise Meets Perfection
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-200 delay-300 opacity-0 animate-fade-in-up">
              Experience unparalleled luxury on our private island sanctuary, where every moment 
              is crafted to perfection and memories last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center delay-400 opacity-0 animate-fade-in-up">
              <Link to="/rooms" className="btn-primary">
                Explore Rooms
              </Link>
              <Link to="/contact" className="btn-outline">
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="text-white text-center">
            <p className="text-sm mb-2 tracking-wider">SCROLL TO DISCOVER</p>
            <div className="text-2xl">↓</div>
          </div>
        </div> */}
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={aboutRef} className="max-w-4xl mx-auto text-center">
            <div className={`opacity-0 ${aboutInView ? 'animate-fade-in-up' : ''}`}>
              <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
                Welcome to Paradise
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
                An Unforgettable Experience Awaits
              </h2>
              <div className="divider"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nestled on a pristine private island, Luxury Resort redefines the art of hospitality. 
                Our award-winning resort combines timeless elegance with modern luxury, offering an 
                exclusive escape where every detail is meticulously crafted for your comfort and pleasure.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="delay-100 opacity-0 animate-fade-in-up">
                  <div className="text-4xl font-display font-bold text-gold-500 mb-2">50+</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">Luxury Suites</div>
                </div>
                <div className="delay-200 opacity-0 animate-fade-in-up">
                  <div className="text-4xl font-display font-bold text-gold-500 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">Concierge</div>
                </div>
                <div className="delay-300 opacity-0 animate-fade-in-up">
                  <div className="text-4xl font-display font-bold text-gold-500 mb-2">5★</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">Rated Resort</div>
                </div>
                <div className="delay-400 opacity-0 animate-fade-in-up">
                  <div className="text-4xl font-display font-bold text-gold-500 mb-2">12</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">Award Winning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-gray-50 luxury-pattern">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Accommodations
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
              Featured Rooms & Suites
            </h2>
            <div className="divider"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium accommodations, each designed to provide 
              the ultimate luxury experience.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white h-96 skeleton rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRooms.map((room, index) => (
                <RoomCard key={room.id} room={room} delay={index * 100} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/rooms" className="btn-primary">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      {/* <section ref={amenitiesRef} className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              World-Class Facilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Luxury Amenities
            </h2>
            <div className="divider"></div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 ${amenitiesInView ? 'animate-fade-in' : ''}`}>
            {amenities.map((amenity, index) => (
              <div
                key={amenity.id}
                className={`bg-navy-800 p-8 text-center hover:bg-navy-700 transition-all duration-300 delay-${index * 100}`}
              >
                <div className="text-5xl mb-4">{amenity.icon === 'pool' ? '🏊' : amenity.icon === 'beach' ? '🏖️' : amenity.icon === 'spa' ? '💆' : amenity.icon === 'restaurant' ? '🍽️' : amenity.icon === 'fitness' ? '💪' : '🔔'}</div>
                <h3 className="font-display text-2xl font-bold mb-3 text-gold-500">
                  {amenity.name}
                </h3>
                <p className="text-gray-300">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Guest Reviews
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
              What Our Guests Say
            </h2>
            <div className="divider"></div>
          </div>

          {!loading && testimonials.length > 0 && (
            <TestimonialCarousel testimonials={testimonials} />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-navy-900/80"></div>
        <div className="relative z-10 container-custom text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Dream Vacation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and experience luxury like never before
          </p>
          <Link to="/contact" className="btn-primary">
            Reserve Your Suite
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
