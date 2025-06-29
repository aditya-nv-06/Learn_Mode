import { FaSearch } from 'react-icons/fa';


function SearchBar(){ 
   return ( 
       <>
            <div className="group flex w-full max-w-md items-center justify-between rounded-full border border-gray-300 bg-white p-1 shadow-md transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-400/50">
                <input type="text" placeholder="Search for courses..." className="w-full bg-transparent px-4 py-1 text-gray-800 placeholder-gray-400 outline-none dark:text-white" />
                <button type="submit" className="rounded-full bg-blue-500 p-2 text-white transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
                    <FaSearch className="h-4 w-4" />
                </button>
            </div>
       </>
   )
}


export default SearchBar;
