import data from '../data/data.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const STORAGE_KEY = 'luxury_resort_data';

// const initializeStorage = () => {
//   if (!localStorage.getItem(STORAGE_KEY)) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//   }
// };

const STORAGE_KEY = 'luxury_resort_data';
const STORAGE_VERSION = 'v3'; // bump this when data.json changes

const initializeStorage = () => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!stored || stored.version !== STORAGE_VERSION) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...data, version: STORAGE_VERSION })
    );
  }
};

const getData = () => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

// Save data to localStorage
const saveData = (newData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
};

// API functions
export const api = {
  // Rooms
  getRooms: async () => {
    await delay(300);
    const data = getData();
    return data.rooms;
  },

  getRoomById: async (id) => {
    await delay(300);
    const data = getData();
    return data.rooms.find(room => room.id === parseInt(id));
  },

  getFeaturedRooms: async () => {
    await delay(300);
    const data = getData();
    return data.rooms.filter(room => room.featured);
  },

  createRoom: async (room) => {
    await delay(300);
    const data = getData();
    const newRoom = {
      ...room,
      id: Math.max(...data.rooms.map(r => r.id), 0) + 1
    };
    data.rooms.push(newRoom);
    saveData(data);
    return newRoom;
  },

  updateRoom: async (id, updates) => {
    await delay(300);
    const data = getData();
    const index = data.rooms.findIndex(room => room.id === parseInt(id));
    if (index !== -1) {
      data.rooms[index] = { ...data.rooms[index], ...updates };
      saveData(data);
      return data.rooms[index];
    }
    throw new Error('Room not found');
  },

  deleteRoom: async (id) => {
    await delay(300);
    const data = getData();
    data.rooms = data.rooms.filter(room => room.id !== parseInt(id));
    saveData(data);
    return { success: true };
  },

  // Experiences
  getExperiences: async () => {
    await delay(300);
    const data = getData();
    return data.experiences;
  },

  getExperienceById: async (id) => {
    await delay(300);
    const data = getData();
    return data.experiences.find(exp => exp.id === parseInt(id));
  },

  // Testimonials
  getTestimonials: async () => {
    await delay(300);
    const data = getData();
    return data.testimonials;
  },

  createTestimonial: async (testimonial) => {
    await delay(300);
    const data = getData();
    const newTestimonial = {
      ...testimonial,
      id: Math.max(...data.testimonials.map(t => t.id), 0) + 1,
      date: new Date().toISOString().split('T')[0],
      verified: false
    };
    data.testimonials.push(newTestimonial);
    saveData(data);
    return newTestimonial;
  },

  // Gallery
  getGallery: async () => {
    await delay(300);
    const data = getData();
    return data.gallery;
  },

  getGalleryByCategory: async (category) => {
    await delay(300);
    const data = getData();
    return data.gallery.filter(item => item.category === category);
  },

  // Amenities
  getAmenities: async () => {
    await delay(300);
    const data = getData();
    return data.amenities;
  },

  // Users
  getUsers: async () => {
    await delay(300);
    const data = getData();
    return data.users;
  },

  createUser: async (user) => {
    await delay(300);
    const data = getData();
    const newUser = {
      ...user,
      id: Math.max(...data.users.map(u => u.id), 0) + 1,
      bookings: []
    };
    data.users.push(newUser);
    saveData(data);
    return newUser;
  },

  updateUser: async (id, updates) => {
    await delay(300);
    const data = getData();
    const index = data.users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
      data.users[index] = { ...data.users[index], ...updates };
      saveData(data);
      return data.users[index];
    }
    throw new Error('User not found');
  },

  // Bookings
  createBooking: async (userId, booking) => {
    await delay(300);
    const data = getData();
    const userIndex = data.users.findIndex(user => user.id === parseInt(userId));
    if (userIndex !== -1) {
      data.users[userIndex].bookings.push(booking);
      saveData(data);
      return booking;
    }
    throw new Error('User not found');
  }
};

export default api;
