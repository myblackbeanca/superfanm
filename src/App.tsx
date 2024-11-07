import React from 'react';
import { Disc3, Users, BarChart3, Gift, ChevronRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { Header } from './components/Header';
import { HexagonImage } from './components/HexagonImage';
import { FeatureCard } from './components/FeatureCard';
import { MinyCard } from './components/MinyCard';
import { VideoSection } from './components/VideoSection';

const featuredMinys = [
  {
    artistName: "Luna Eclipse",
    mixtapeName: "Midnight Rhythms",
    imageSrc: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80",
    epkLink: "#luna-epk",
    playLink: "#luna-mixtape"
  },
  {
    artistName: "Cosmic Beats",
    mixtapeName: "Solar Frequencies",
    imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
    epkLink: "#cosmic-epk",
    playLink: "#cosmic-mixtape"
  },
  {
    artistName: "Urban Echo",
    mixtapeName: "City Lights",
    imageSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    epkLink: "#urban-epk",
    playLink: "#urban-mixtape"
  },
  {
    artistName: "Desert Rose",
    mixtapeName: "Oasis Dreams",
    imageSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
    epkLink: "#desert-epk",
    playLink: "#desert-mixtape"
  },
  {
    artistName: "Electric Soul",
    mixtapeName: "Voltage",
    imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
    epkLink: "#electric-epk",
    playLink: "#electric-mixtape"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-purple-900 text-white pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/90 z-10" />
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your Music Journey with MINY
              </h1>
              <p className="text-xl md:text-2xl text-purple-200">
                Build Your First 1,000 Superfans
              </p>
              <a 
                href="https://drop.minyvinyl.com" 
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Sign up now <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <HexagonImage 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
                alt="MINY Vinyl Record"
                className="w-72 h-72 md:w-96 md:h-96"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Featured MINYs */}
      <section id="featured" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Featured MINYs</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover exclusive mixtapes from talented artists. Each MINY is a unique 2-inch hexagon-shaped collectible that connects you directly with the artist.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {featuredMinys.map((miny, index) => (
              <MinyCard key={index} {...miny} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://drop.minyvinyl.com" 
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Feature your music here
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <a 
              href="https://y.minyvinyl.com" 
              className="hover:text-purple-600 transition-colors"
            >
              Why Choose MINY?
            </a>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Users}
              title="Direct Fan Connection"
              description="Build meaningful relationships through exclusive playlists and personalized interactions."
            />
            <FeatureCard 
              icon={BarChart3}
              title="Trackable Engagement"
              description="Know who's listening, sharing, and supporting your music with digital insights."
            />
            <FeatureCard 
              icon={Disc3}
              title="Exclusive Collectibles"
              description="Offer fans something unique they can own, keep, and share."
            />
            <FeatureCard 
              icon={Gift}
              title="Superfan Journey"
              description="Turn casual listeners into loyal supporters with our proven methods."
            />
          </div>
        </div>
      </section>

      {/* Unboxing Videos */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">MINY Unboxing Experience</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Watch how fans experience MINY in different settings. From live venues to home collections, see the magic unfold.
          </p>
          <VideoSection />
        </div>
      </section>

      {/* Testimonials */}
      <section id="success-stories" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Artist Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <HexagonImage 
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80"
                alt="Alexandra Starr"
                className="w-24 h-24 mb-6"
              />
              <p className="text-gray-600 mb-4">
                "MINY has helped me discover my most dedicated fans. They're not just listeners anymore; they're part of my journey."
              </p>
              <p className="font-bold">Alexandra Starr</p>
              <p className="text-purple-600">Independent Artist</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <HexagonImage 
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80"
                alt="Marcus Leon"
                className="w-24 h-24 mb-6"
              />
              <p className="text-gray-600 mb-4">
                "I never knew how many superfans I had out there until I saw the MINY data. Now, I can connect with them directly!"
              </p>
              <p className="font-bold">Marcus Leon</p>
              <p className="text-purple-600">Songwriter</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your 1,000 Superfans?</h2>
          <p className="text-xl text-purple-200 mb-8">
            Join our MINY Exclusive program to connect with superfans and grow your career like never before.
          </p>
          <a 
            href="https://drop.minyvinyl.com"
            className="inline-block bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors"
          >
            Join MINY Exclusive Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">MINY</h3>
              <p className="text-gray-400">Transform your music journey</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fan Engagement</li>
                <li>Analytics</li>
                <li>Collectibles</li>
                <li>EPK Builder</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Success Stories</li>
                <li>Support</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/minyvinyl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com/minyvinyl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://facebook.com/minyvinyl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MINY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;