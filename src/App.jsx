import React from 'react';

// You can create a separate file for this component, e.g., src/components/FeatureCard.jsx
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
    <div className="text-orange-500 text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header/Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-950 shadow-md">
        <div className="text-2xl font-bold text-orange-500">Trip Planner</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex items-center justify-center h-screen bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b947?auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
            Plan Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Effortlessly organize your flights, hotels, and activities.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110">
            Start Planning
          </button>
        </div>
      </header>

      {/* Feature Showcase Section */}
      <section className="py-20 px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Features You'll Love</h2>
          <p className="text-lg text-gray-400">Everything you need for a stress-free journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard 
            icon="📝" 
            title="Intuitive Itinerary"
            description="Drag and drop your activities to create the perfect schedule for your trip."
          />
          <FeatureCard 
            icon="🤝"
            title="Collaborate with Friends"
            description="Invite your travel buddies to edit and add to the plan together in real-time."
          />
          <FeatureCard 
            icon="💰"
            title="Budget Tracker"
            description="Keep a real-time log of your expenses to stay on track and within your budget."
          />
          <FeatureCard 
            icon="📍"
            title="Interactive Maps"
            description="Visualize your journey with an integrated map of all your stops and destinations."
          />
          <FeatureCard 
            icon="📸"
            title="Photo Journal"
            description="Document your memories with an integrated photo journal for each trip."
          />
          <FeatureCard 
            icon="🔔"
            title="Reminder Alerts"
            description="Get notified about upcoming activities, flights, or hotel check-ins."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Dream Vacation?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join thousands of happy travelers who use our platform to make their trips unforgettable.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-colors duration-300">
            Sign Up for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-8 text-gray-500">
        <p>&copy; 2025 Trip Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;