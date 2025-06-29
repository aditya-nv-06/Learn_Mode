import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Courses', path: '/courses', icon: <FaBook /> },
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:w-content z-40`}>
        <div className="flex h-full flex-col p-4 pt-8">
          <div className="mb-8 flex flex-col items-center text-center">
            <img
              src="https://picsum.photos/200"
              alt="Logo"
              className="h-24 w-24 rounded-full border-4 border-gray-700 object-cover shadow-md transition-transform duration-300 hover:scale-105"
            />
            <h1 className="mt-4 text-2xl font-bold">Learn Mode</h1>
            <p className="text-sm text-gray-400">Your Learning Companion</p>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white"
                    onClick={() => setIsOpen(false)}>
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto text-center">
            <Link to="/register">
              <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 py-3 font-bold text-white shadow-md transition-all duration-300 hover:from-blue-600 hover:to-purple-600 mt-4">
                Sign Up
              </button>
            </Link>
            <p className="mt-4 text-xs text-gray-500">&copy; 2025 Learn Mode</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
