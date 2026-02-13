# Luxury Resort - Premium React Frontend

A stunning, fully responsive luxury resort website built with React.js, Vite, Tailwind CSS, and modern web technologies. This project showcases premium UI/UX design with smooth animations, elegant components, and a complete booking system with mock API integration.

![Luxury Resort](https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=400&fit=crop)

## 🌟 Features

### Core Functionality
- ✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **React Router Navigation** - Smooth single-page application experience
- ✅ **Mock API Integration** - Full CRUD operations with localStorage persistence
- ✅ **Form Validation** - Real-time validation for booking enquiries
- ✅ **Image Gallery** - Interactive lightbox with keyboard navigation
- ✅ **Testimonial Carousel** - Auto-playing customer reviews
- ✅ **Smooth Animations** - Fade-ins, slide-ins, and scroll-triggered effects
- ✅ **Sticky Navigation** - Transparent to solid transition on scroll
- ✅ **Filter & Sort** - Dynamic room filtering and sorting options

### Pages & Modules

#### 1. Home Page
- Hero banner with parallax effect
- Resort highlights and statistics
- Featured rooms showcase
- Luxury amenities grid
- Testimonials carousel
- Call-to-action sections

#### 2. Rooms & Suites
- Room listings with filtering by type
- Sorting options (featured, price)
- Real-time availability status
- Responsive card layout
- Detailed room information

#### 3. Room Details
- Full-screen image gallery
- Comprehensive room description
- Amenities checklist
- Booking form with date selection
- Price calculator
- Similar rooms recommendations

#### 4. Experiences
- Activity categories (Wellness, Culinary, Adventure)
- Experience cards with highlights
- Pricing and duration information
- Category filtering
- Booking integration

#### 5. Gallery
- Grid layout with category filters
- Lightbox viewer with keyboard navigation
- Image categories (Resort, Dining, Beach, Spa, etc.)
- Smooth hover effects
- Video section placeholder

#### 6. About Us
- Resort history and story
- Mission, vision, and values
- Awards and recognition
- Team section
- Statistics showcase

#### 7. Contact / Booking Enquiry
- Comprehensive booking form
- Real-time form validation
- Contact information display
- Map integration placeholder
- Social media links
- 24/7 concierge information

## 🎨 Design Features

### Visual Excellence
- **Luxury Color Palette**: Navy blue, gold accents, and elegant neutrals
- **Premium Typography**: Cormorant Garamond (display) + Montserrat (body)
- **Smooth Animations**: Staggered fade-ins, slide transitions, hover effects
- **Custom Components**: Reusable cards, modals, forms, navigation
- **Parallax Effects**: Fixed background sections for depth
- **Gradient Overlays**: Professional image treatments
- **Microinteractions**: Button hover effects, loading states

### Animation Library
- Fade-in animations
- Slide-in from left/right
- Scale-in effects
- Float animations
- Staggered delays for sequential reveals
- Scroll-triggered animations using Intersection Observer

## 🚀 Technologies Used

- **React.js 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features
- **LocalStorage** - Mock database persistence
- **Custom Hooks** - Reusable React logic
- **Intersection Observer** - Scroll animations

## 📁 Project Structure

```
luxury-resort/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── RoomCard.jsx
│   │   ├── TestimonialCarousel.jsx
│   │   └── Lightbox.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Rooms.jsx
│   │   ├── RoomDetails.jsx
│   │   ├── Experiences.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── data.json
│   ├── utils/
│   │   ├── api.js
│   │   └── hooks.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd luxury-resort
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📊 Mock API & Data Management

The application uses a mock API system with localStorage for data persistence.

### Available API Methods

```javascript
// Rooms
api.getRooms()
api.getRoomById(id)
api.getFeaturedRooms()
api.createRoom(room)
api.updateRoom(id, updates)
api.deleteRoom(id)

// Experiences
api.getExperiences()
api.getExperienceById(id)

// Testimonials
api.getTestimonials()
api.createTestimonial(testimonial)

// Gallery
api.getGallery()
api.getGalleryByCategory(category)

// Users & Bookings
api.getUsers()
api.createUser(user)
api.updateUser(id, updates)
api.createBooking(userId, booking)
```

### Data Structure

All data is stored in `src/data/data.json` and includes:
- Rooms (6 luxury accommodations)
- Experiences (4 activity categories)
- Testimonials (4 verified reviews)
- Gallery (8 categorized images)
- Amenities (6 resort features)
- Users (sample user accounts)

## 🎯 Custom Hooks

### useIntersectionObserver
Triggers animations when elements enter viewport:
```javascript
const [ref, isIntersecting] = useIntersectionObserver();
```

### useScrollPosition
Tracks scroll position for sticky navbar:
```javascript
const scrollPosition = useScrollPosition();
```

### useFormValidation
Handles form state and validation:
```javascript
const { values, errors, handleChange, validateAll } = useFormValidation(initialState, rules);
```

### useWindowSize
Responsive design helper:
```javascript
const { width, height } = useWindowSize();
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  gold: { ... },
  navy: { ... }
}
```

### Fonts
Change fonts in `src/index.css`:
```css
@import url('your-google-fonts-url');
```

### Content
Update `src/data/data.json` to modify:
- Room listings
- Experiences
- Testimonials
- Gallery images
- Contact information

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1400px+

## 🔑 Key Components

### RoomCard
Reusable room display component with:
- Image carousel
- Price display
- Availability status
- Quick info grid
- Action buttons

### TestimonialCarousel
Auto-playing carousel with:
- Manual navigation
- Progress indicators
- Smooth transitions
- Star ratings

### Lightbox
Full-screen image viewer with:
- Keyboard navigation (ESC, ←, →)
- Image counter
- Smooth animations
- Click-outside to close

## 🚀 Performance Optimizations

- Lazy loading images
- Code splitting with React Router
- Optimized build with Vite
- Minimal re-renders with React hooks
- Efficient CSS with Tailwind JIT
- Asset optimization

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔮 Future Enhancements

Potential features for expansion:
- [ ] Real backend API integration
- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced search filters
- [ ] Social media integration
- [ ] Blog section
- [ ] Live chat support
- [ ] Virtual tours (360°)

## 📝 License

This project is created for educational and portfolio purposes.

## 👨‍💻 Developer Notes

### Code Quality
- Clean, maintainable code structure
- Consistent naming conventions
- Comprehensive comments
- Reusable components
- DRY principles followed

### Best Practices
- React hooks best practices
- Accessibility considerations
- SEO-friendly structure
- Performance optimizations
- Mobile-first approach

## 🆘 Troubleshooting

### Common Issues

**Issue**: Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Animations not working
- Check browser compatibility
- Ensure JavaScript is enabled
- Verify Tailwind CSS is properly configured

**Issue**: Images not loading
- Check network connection
- Verify image URLs in data.json
- Check browser console for errors

## 📞 Support

For questions or support, please contact:
- Email: reservations@luxuryresort.com
- Phone: +1 (555) 123-4567

## 🙏 Acknowledgments

- Unsplash for beautiful stock images
- Google Fonts for typography
- Tailwind CSS team for the amazing framework
- React team for the excellent library

---

**Built with ❤️ for luxury hospitality excellence**
