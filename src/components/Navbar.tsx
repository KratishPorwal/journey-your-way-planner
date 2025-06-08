
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, MapPin, Map, Compass, Info, Bookmark, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClasses = `flex items-center px-4 py-2 rounded-md transition-colors ${
    isScrolled 
      ? 'text-gray-700 hover:bg-gray-100' 
      : 'text-gray-700 hover:bg-white/10'
  }`;

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="bg-travel-blue rounded-full p-2">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-travel-blue">Journey<span className="text-travel-coral">Your</span>Way</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={linkClasses}>
              <Map className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link to="/destinations" className={linkClasses}>
              <Compass className="h-4 w-4 mr-2" />
              Destinations
            </Link>
            <Link to="/plan" className={linkClasses}>
              <Map className="h-4 w-4 mr-2" />
              Plan Trip
            </Link>
            <Link to="/saved-itineraries" className={linkClasses}>
              <Bookmark className="h-4 w-4 mr-2" />
              Saved Trips
            </Link>
            <Link to="/about" className={linkClasses}>
              <Info className="h-4 w-4 mr-2" />
              About Us
            </Link>
            <button onClick={handleLogout} className={linkClasses}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-travel-coral hover:bg-travel-coral/90 text-white">
              <Link to="/plan">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <Link 
              to="/"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
              onClick={closeMenu}
            >
              <Map className="h-5 w-5 mr-3" />
              Home
            </Link>
            <Link 
              to="/destinations"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
              onClick={closeMenu}
            >
              <Compass className="h-5 w-5 mr-3" />
              Destinations
            </Link>
            <Link 
              to="/plan"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
              onClick={closeMenu}
            >
              <Map className="h-5 w-5 mr-3" />
              Plan Trip
            </Link>
            <Link 
              to="/saved-itineraries"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
              onClick={closeMenu}
            >
              <Bookmark className="h-5 w-5 mr-3" />
              Saved Trips
            </Link>
            <Link 
              to="/about"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
              onClick={closeMenu}
            >
              <Info className="h-5 w-5 mr-3" />
              About Us
            </Link>
            <button
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
            <div className="px-4 py-3">
              <Button asChild className="w-full bg-travel-coral hover:bg-travel-coral/90 text-white">
                <Link to="/plan" onClick={closeMenu}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
