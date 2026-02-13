import { useEffect } from 'react';

const Lightbox = ({ image, onClose, onNext, onPrev, currentIndex, totalImages }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <div
      className="lightbox"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gold-500 transition-colors duration-300 z-50 focus:outline-none"
        aria-label="Close lightbox"
      >
        ×
      </button>

      {/* Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors duration-300 z-50 focus:outline-none"
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors duration-300 z-50 focus:outline-none"
        aria-label="Next image"
      >
        →
      </button>

      {/* Image */}
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.image}
          alt={image.title}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Image Info */}
        <div className="text-white text-center mt-4">
          <h3 className="font-display text-2xl font-bold mb-2">{image.title}</h3>
          <p className="text-gold-500 mb-2">{image.category}</p>
          <p className="text-sm text-gray-400">
            {currentIndex + 1} / {totalImages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
