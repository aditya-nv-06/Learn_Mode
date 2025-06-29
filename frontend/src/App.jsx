import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import { Routes, Route, useLocation } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import VideoPage from './pages/VideoPage';
import TopBar from './components/TopBar';

function App() {
  const location = useLocation();
  const showTopBar = location.pathname === '/';

  return (
    <>
      {showTopBar && <TopBar />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/videos" element={<VideoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
