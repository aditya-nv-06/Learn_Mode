import { Link } from 'react-router-dom';
import { FaCode, FaDatabase, FaNetworkWired, FaProjectDiagram } from 'react-icons/fa';

function SideBarCourse({ title }) {
  const courses = [
    { name: 'Web Development', path: 'Web%20Development', icon: <FaCode /> },
    { name: 'DSA', path: 'dsa', icon: <FaProjectDiagram /> },
    { name: 'Computer Networks', path: 'Computer%20Networks', icon: <FaNetworkWired /> },
    { name: 'DataBase', path: 'DataBase', icon: <FaDatabase /> },
  ];

  return (
    <div className="flex h-full flex-col bg-white p-4 dark:bg-gray-900 z-50 md:pt-12">
      <div className="mb-6 flex items-center gap-3 px-2">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {courses.map((course) => (
            <li key={course.path}>
              <Link
                to={`/videos?name=${course.path}`}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-300"
              >
                <span className="text-lg">{course.icon}</span>
                <span className="font-medium">{course.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBarCourse;
