import { useState, useEffect } from 'react';
import api from '../utils/api';
import Lightbox from '../components/Lightbox';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await api.getGallery();       
        console.log("Gallery data length:", data.length);
        setGallery(data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const categories = ['all', ...new Set(gallery.map(item => item.category))];
  const filteredGallery = filter === 'all'
    ? gallery
    : gallery.filter(item => item.category === filter);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredGallery.length;
    setLightboxImage(filteredGallery[nextIndex]);
    setLightboxIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setLightboxImage(filteredGallery[prevIndex]);
    setLightboxIndex(prevIndex);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Gallery
          </h1>
          <div className="divider bg-gold-500 mb-4"></div>
          <p className="text-xl md:text-2xl font-light delay-200 opacity-0 animate-fade-in-up">
            A Visual Journey Through Paradise
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  filter === category
                    ? 'bg-gold-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="aspect-square skeleton"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredGallery.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative aspect-square overflow-hidden cursor-pointer hover-zoom"
                  onClick={() => openLightbox(item, index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-display text-xl font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gold-500 text-sm">{item.category}</p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    🔍
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
                No images found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Our Resort
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Take a virtual tour through our luxury resort and discover what makes us special
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-xl">Video Tour Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          currentIndex={lightboxIndex}
          totalImages={filteredGallery.length}
        />
      )}
    </div>
  );
};

export default Gallery;
