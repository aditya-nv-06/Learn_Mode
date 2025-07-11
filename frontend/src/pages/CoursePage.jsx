import SideBarCourse from '../components/SideBarCourse';
import Card from '../components/Card';
import Popup from '../components/Popup';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

async function fetchCourses() {
  console.log(`Bearing token: ${localStorage.getItem('token')}`); 
  try {
    const response = await fetch('http://localhost:3000/api/course/getcourse',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}` 
      }
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error; 
  }
}

function CoursePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchCourses()
      .then((courses) => {
        if (courses) {
          setData(courses);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0 fixed top-0 left-0 h-full z-50 ">
        <SideBarCourse title="Courses" courseData={data} />
      </div>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative h-full w-64 bg-white p-4 shadow-lg dark:bg-gray-900">
          <SideBarCourse title="Courses" courseData={data} />
        </div>
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:ml-64 ">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-md dark:bg-gray-900/70">
              <button
                className="text-gray-700 dark:text-gray-300 lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <FaBars className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Available Courses
              </h1>
              <button
                className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                onClick={() => handlePopup()}
              >
                Add Course
              </button>
            </div>

            {/* Course Grid */}
            {isLoading ? (
              <div className="mt-8 text-center">Loading...</div>
            ) : error ? (
              <div className="mt-8 text-center text-red-500">
                Error: {error.message}
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {data.map((course) => (
                  <Link to={`/videos?name=${course.name}`} key={course.courseId}>
                    <Card
                      title={course.name}
                      description={course.description}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </main>
    </div>
  );
}

export default CoursePage;

