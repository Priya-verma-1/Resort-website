import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const policies = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms & Conditions', path: '#' },
    { name: 'Cancellation Policy', path: '#' },
    { name: 'FAQ', path: '#' }
  ];

  // const socialLinks = [
  //   { name: 'Facebook', icon: '📘', url: '#' },
  //   { name: 'Instagram', icon: '📷', url: '#' },
  //   { name: 'Twitter', icon: '🐦', url: '#' },
  //   { name: 'LinkedIn', icon: '💼', url: '#' }
  // ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gold-500 py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-navy-800 mb-6">
              Get exclusive offers, updates, and luxury travel inspiration delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 text-navy-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-navy-900 text-white px-8 py-3 font-medium tracking-wide uppercase text-sm hover:bg-navy-800 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 border-2 border-gold-500 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-gold-500">L</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-wider">
                  LUXURY RESORT
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience unparalleled luxury and hospitality at our exclusive oceanfront resort.
              Where every moment becomes a cherished memory.
            </p>

            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-2xl hover:text-gold-500 transition-colors duration-300"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-gold-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-gold-500">
              Information
            </h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.path}
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 inline-block"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-gold-500">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <span className="text-gold-500 mt-1">📍</span>
                <span>123 Paradise Island, Tropical Bay, TB 12345</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold-500 mt-1">📞</span>
                <span>+91 555 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold-500 mt-1">✉️</span>
                <span>reservations@luxuryresort.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold-500 mt-1">🕒</span>
                <span>24/7 Concierge Service</span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Luxury Resort. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <span>🏆</span>
                <span>Award Winning Resort</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>⭐</span>
                <span>5-Star Rated</span>
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
