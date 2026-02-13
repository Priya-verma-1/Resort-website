import { useIntersectionObserver } from '../utils/hooks';

const About = () => {
  const [aboutRef, aboutInView] = useIntersectionObserver();
  const [visionRef, visionInView] = useIntersectionObserver();
  const [awardsRef, awardsInView] = useIntersectionObserver();

  const stats = [
    { number: '2010', label: 'Established' },
    { number: '50+', label: 'Luxury Suites' },
    { number: '150+', label: 'Expert Staff' },
    { number: '98%', label: 'Guest Satisfaction' }
  ];

  const values = [
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring an unparalleled experience for our guests.'
    },
    {
      icon: '💚',
      title: 'Sustainability',
      description: 'Committed to environmental responsibility while maintaining luxury standards.'
    },
    {
      icon: '🤝',
      title: 'Hospitality',
      description: 'Genuine warmth and personalized service are at the heart of everything we do.'
    },
    {
      icon: '🎨',
      title: 'Innovation',
      description: 'Continuously evolving to exceed expectations and set new standards in luxury hospitality.'
    }
  ];

  const awards = [
    {
      year: '2024',
      title: 'World\'s Best Luxury Resort',
      organization: 'Travel Excellence Awards'
    },
    {
      year: '2023',
      title: 'Best Spa & Wellness Resort',
      organization: 'Global Hospitality Awards'
    },
    {
      year: '2023',
      title: 'Environmental Leadership Award',
      organization: 'Sustainable Tourism Council'
    },
    {
      year: '2022',
      title: '5-Star Diamond Award',
      organization: 'Luxury Hotel Association'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Our Story
          </h1>
          <div className="divider bg-gold-500 mb-6"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed delay-200 opacity-0 animate-fade-in-up">
            A journey of excellence, passion, and unwavering commitment to creating 
            extraordinary experiences in paradise
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`opacity-0 ${aboutInView ? 'animate-slide-in-left' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                alt="Resort History"
                className="w-full h-[600px] object-cover shadow-2xl"
              />
            </div>
            <div className={`opacity-0 ${aboutInView ? 'animate-slide-in-right' : ''}`}>
              <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
                Since 2010
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
                A Legacy of Luxury
              </h2>
              <div className="divider bg-gold-500 mx-0 mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in 2010, Luxury Resort was born from a vision to create an unparalleled 
                haven of tranquility and opulence. Nestled on a pristine private island, our resort 
                has become synonymous with exceptional service, breathtaking beauty, and unforgettable 
                experiences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Every detail of our resort has been carefully curated to provide guests with a perfect 
                blend of natural splendor and modern luxury. From our award-winning spa to our 
                Michelin-starred restaurants, we've created a destination where dreams become reality.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our commitment to excellence has earned us numerous accolades and, more importantly, 
                the loyalty of guests who return year after year to rediscover the magic of our island paradise.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center delay-${index * 100} opacity-0 ${aboutInView ? 'animate-fade-in-up' : ''}`}
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-gold-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section ref={visionRef} className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Vision & Values
            </h2>
            <div className="divider bg-gold-500"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Guided by our core values, we aspire to be the world's most distinguished luxury resort, 
              setting the standard for excellence in hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-navy-800 hover:bg-navy-700 transition-all duration-300 delay-${index * 100} opacity-0 ${visionInView ? 'animate-fade-in-up' : ''}`}
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-3 text-gold-500">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section ref={awardsRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Recognition
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
              Awards & Accolades
            </h2>
            <div className="divider"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 p-6 bg-gray-50 hover:bg-gold-50 transition-all duration-300 delay-${index * 100} opacity-0 ${awardsInView ? 'animate-slide-in-left' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl font-bold text-navy-900">
                      {award.title}
                    </h3>
                    <span className="text-gold-500 font-bold text-xl">{award.year}</span>
                  </div>
                  <p className="text-gray-600">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Meet Our Team
          </h2>
          <div className="divider"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 mb-12">
            Our dedicated team of hospitality professionals is committed to making your stay 
            extraordinary. With years of experience and a passion for service, we're here to 
            ensure every moment exceeds your expectations.
          </p>
          <button className="btn-primary">
            Join Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
