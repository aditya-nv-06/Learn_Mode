import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-2 flex justify-between items-center shadow-lg z-30">
      <div className="w-1/3">
        {/* Empty div for spacing */}
      </div>
      <div className="w-1/3 flex justify-center">
        <SearchBar />
      </div>
      <div className="w-1/3 flex justify-end">
        <UserProfile />
      </div>
    </div>
  );
}

export default TopBar;
