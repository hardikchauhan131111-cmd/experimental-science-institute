import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, Atom, Menu } from 'lucide-react';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <Atom className="h-8 w-8 text-blue-600" />
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-gray-900">Experimental Science Institute</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/events"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Events
            </Link>
          </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{user.name}</span>
                  <button
                    onClick={logout}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>
          <div className="flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              className="text-gray-500 hover:text-gray-900"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};