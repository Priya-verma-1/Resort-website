import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useIntersectionObserver } from '../utils/hooks';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await api.getExperiences();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const categories = ['all', ...new Set(experiences.map(exp => exp.category))];
  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === filter);

  const ExperienceCard = ({ experience, delay = 0 }) => {
    const [ref, isIntersecting] = useIntersectionObserver();

    return (
      <div
        ref={ref}
        className={`opacity-0 ${isIntersecting ? 'animate-fade-in-up' : ''}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="card-luxury group">
          <div className="relative h-80 overflow-hidden">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block bg-gold-500 px-3 py-1 text-xs font-medium tracking-wider uppercase mb-3">
                {experience.category}
              </span>
              <h3 className="font-display text-3xl font-bold mb-2">
                {experience.title}
              </h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-700 mb-6 leading-relaxed">
              {experience.description}
            </p>

            <div className="mb-6">
              <h4 className="font-display text-lg font-bold text-navy-900 mb-3">
                Highlights
              </h4>
              <ul className="space-y-2">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-700">
                    <span className="text-gold-500 mt-1">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <div>
                <div className="text-sm text-gray-600 mb-1">Duration</div>
                <div className="font-medium text-navy-900">{experience.duration}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">From</div>
                <div className="text-2xl font-bold text-gold-500">
                  ${experience.priceFrom}
                </div>
              </div>
            </div>

            <button className="w-full mt-6 btn-primary">
              Book Experience
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Experiences
          </h1>
          <div className="divider bg-gold-500 mb-4"></div>
          <p className="text-xl md:text-2xl font-light delay-200 opacity-0 animate-fade-in-up">
            Create Unforgettable Memories
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
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${filter === category
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

      {/* Experiences Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white h-96 skeleton rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  delay={index * 100}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Customize Your Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our concierge team can create a personalized itinerary tailored to your preferences
          </p>
          <button className="btn-primary">
            Contact Concierge
          </button>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
