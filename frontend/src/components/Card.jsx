

import { FaArrowRight } from 'react-icons/fa';

function Card({ title, description }) {
  return (
    <div className="group relative block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800/80 dark:hover:bg-gray-800 transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute bottom-6 right-6 text-blue-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 dark:text-blue-400">
        <FaArrowRight className="h-6 w-6" />
      </div>
    </div>
  );
}

export default Card;
