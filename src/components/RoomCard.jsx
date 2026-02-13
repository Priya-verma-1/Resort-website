import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../utils/hooks';

const RoomCard = ({ room, delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`card-luxury opacity-0 ${
        isIntersecting ? 'animate-fade-in-up' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 hover-zoom overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {room.featured && (
          <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-1 text-xs font-medium tracking-wider uppercase">
            Featured
          </div>
        )}
        {!room.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-navy-900 text-white px-6 py-2 text-sm font-medium tracking-wider uppercase">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-gold-500 text-sm font-medium tracking-wide uppercase">
              {room.type}
            </span>
            <h3 className="font-display text-2xl font-bold text-navy-900 mt-1">
              {room.name}
            </h3>
          </div>
          <div className="text-right">
            <div className="text-gold-500 font-bold text-2xl">
              ${room.price}
            </div>
            <div className="text-gray-600 text-sm">per night</div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {room.shortDescription}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="text-gold-500">📏</span>
            <span>{room.size}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold-500">👥</span>
            <span>{room.capacity} Guests</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold-500">🛏️</span>
            <span>{room.beds}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gold-500">
              {room.amenities[0].includes('Ocean') ? '🌊' : '🌳'}
            </span>
            <span>{room.amenities[0]}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/rooms/${room.id}`}
            className="flex-1 text-center border-2 border-gold-500 text-gold-500 px-4 py-2 font-medium tracking-wide uppercase text-sm hover:bg-gold-500 hover:text-white transition-all duration-300"
          >
            View Details
          </Link>
          {room.available && (
            <Link
              to="/contact"
              className="flex-1 text-center bg-gold-500 text-white px-4 py-2 font-medium tracking-wide uppercase text-sm hover:bg-gold-600 transition-all duration-300"
            >
              Book Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
