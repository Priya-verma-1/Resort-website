import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/api';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const data = await api.getRoomById(id);
        setRoom(data);
      } catch (error) {
        console.error('Error fetching room:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading room details...</p>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
            Room Not Found
          </h2>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div>
      {/* Hero Gallery */}
      <section className="relative h-screen bg-black">
        <div className="relative h-full">
          <img
            src={room.images[currentImageIndex]}
            alt={room.name}
            className="w-full h-full object-cover opacity-90"
          />
          
          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Next image"
          >
            →
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {room.images.length}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {room.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'border-gold-500 scale-110'
                    : 'border-white/50 hover:border-white'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
                  {room.type}
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-2 mb-4">
                  {room.name}
                </h1>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="text-gold-500">📏</span>
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gold-500">👥</span>
                    <span>Up to {room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gold-500">🛏️</span>
                    <span>{room.beds}</span>
                  </div>
                </div>
              </div>

              <div className="divider bg-gold-500 mx-0"></div>

              <div className="my-8">
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {room.description}
                </p>
              </div>

              <div className="my-8">
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">
                  Room Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gold-50 transition-colors duration-300"
                    >
                      <span className="text-gold-500 text-xl">✓</span>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-navy-900 text-white p-8 shadow-xl">
                <div className="mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-gold-500 text-4xl font-bold">
                      ${room.price}
                    </span>
                    <span className="text-gray-300">per night</span>
                  </div>
                  {!room.available && (
                    <div className="bg-red-500 text-white px-4 py-2 text-center text-sm font-medium mt-4">
                      Currently Unavailable
                    </div>
                  )}
                </div>

                <div className="divider bg-gold-500 mx-0 my-6"></div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-in</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 focus:border-gold-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-out</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 focus:border-gold-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Guests</label>
                    <select className="w-full px-4 py-3 bg-navy-800 border border-navy-700 focus:border-gold-500 text-white">
                      {[...Array(room.capacity)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block text-center px-8 py-4 font-medium tracking-wide uppercase transition-all duration-300 ${
                    room.available
                      ? 'bg-gold-500 text-white hover:bg-gold-600'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {room.available ? 'Book Now' : 'Contact Us'}
                </Link>

                <div className="mt-6 text-sm text-gray-400 space-y-2">
                  <p className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Free cancellation up to 48 hours</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Best price guarantee</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Instant confirmation</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Rooms */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
            Similar Rooms
          </h2>
          <div className="text-center">
            <Link to="/rooms" className="btn-outline">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetails;
