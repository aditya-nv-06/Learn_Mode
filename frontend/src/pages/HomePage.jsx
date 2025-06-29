import { Link } from 'react-router-dom';
import { FaBook, FaUsers, FaLaptopCode } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <div className="flex flex-1">
        <div className="md:w-56 md:flex-shrink-0">
          <Navbar />
        </div>

        <main className="flex-1 overflow-y-auto  pt-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h1 className="animate-slide-in text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Welcome to Learn Mode
              </h1>
              <p className="mt-4 max-w-2xl animate-fade-in text-lg delay-200 md:text-xl">
                Your ultimate destination for mastering new skills. Explore our expert-led courses and accelerate your career.
              </p>
              <Link to="/courses">
                <button className="mt-8 transform rounded-full bg-white px-8 py-3 font-bold text-blue-600 shadow-lg transition-transform duration-300 hover:scale-105">
                  Explore Courses
                </button>
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                <div className="animate-fade-in delay-300">
                  <FaLaptopCode className="mx-auto mb-4 h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Expert-Led Courses</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Learn from industry professionals.</p>
                </div>
                <div className="animate-fade-in delay-400">
                  <FaBook className="mx-auto mb-4 h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rich Content</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Access a vast library of videos and articles.</p>
                </div>
                <div className="animate-fade-in delay-500">
                  <FaUsers className="mx-auto mb-4 h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community Support</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Join a vibrant community of learners.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Courses Section */}
          <section className="bg-gray-100 py-12 dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
                Featured Courses
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Link to="/videos?name=Web%20Development">
                  <Card
                    title="Web Development"
                    description="Master the art of building modern websites and applications."
                  />
                </Link>
                <Link to="/videos?name=Computer%20Networks">
                  <Card
                    title="Computer Networks"
                    description="Understand the protocols and architecture of the internet."
                  />
                </Link>
                <Link to="/videos?name=DataBase">
                  <Card
                    title="Database Systems"
                    description="Learn to manage and query data with SQL and NoSQL databases."
                  />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;


