import { useState, useEffect } from 'react';
import api from '../utils/api';
import RoomCard from '../components/RoomCard';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await api.getRooms();
        setRooms(data);
        setFilteredRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    let filtered = [...rooms];

    // Apply filter
    if (filter !== 'all') {
      filtered = filtered.filter(room => room.type === filter);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredRooms(filtered);
  }, [filter, sortBy, rooms]);

  const roomTypes = ['all', ...new Set(rooms.map(room => room.type))];

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Rooms & Suites
          </h1>
          <div className="divider bg-gold-500 mb-4"></div>
          <p className="text-xl md:text-2xl font-light delay-200 opacity-0 animate-fade-in-up">
            Discover Your Perfect Sanctuary
          </p>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {roomTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    filter === type
                      ? 'bg-gold-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-gray-600 text-sm font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 text-sm font-medium focus:border-gold-500 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white h-96 skeleton rounded-lg"></div>
              ))}
            </div>
          ) : filteredRooms.length > 0 ? (
            <>
              <div className="mb-6 text-gray-600">
                Showing {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRooms.map((room, index) => (
                  <RoomCard key={room.id} room={room} delay={index * 100} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
                No rooms found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Why Book Direct?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-display text-xl font-bold mb-2 text-gold-500">
                  Best Price Guarantee
                </h3>
                <p className="text-gray-300">
                  Exclusive rates available only through direct booking
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-display text-xl font-bold mb-2 text-gold-500">
                  Special Perks
                </h3>
                <p className="text-gray-300">
                  Complimentary upgrades and welcome amenities
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="font-display text-xl font-bold mb-2 text-gold-500">
                  Flexible Cancellation
                </h3>
                <p className="text-gray-300">
                  Free cancellation up to 48 hours before arrival
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
