import { useSearchParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import VideoSideBar from '../components/VideoSideBar';
import CourseIntroduction from '../components/CourseIntroduction';
import { data } from '../data';

function VideoPage() {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('name') || 'Course';
  const videoId = searchParams.get('id');

  const course = data.find(course => course.name === courseName);
  const currentVideo = course?.courses?.find(video => video.id === parseInt(videoId));
  const courseIntroduction = course?.introduction || "Welcome to the course!";

  return (
    <div className="grid h-screen grid-cols-[22%_78%] bg-gray-100 dark:bg-gray-950">
      <div className="overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 z-50">
        <VideoSideBar />
      </div>
      <main className="overflow-y-auto p-6 lg:p-8">
        <div className="mx-auto max-w-5xl pt-12">
          {currentVideo ? (
            <VideoSection key={currentVideo.id} src={currentVideo.src} courseName={courseName} />
          ) : (
            <CourseIntroduction introduction={courseIntroduction} />
          )}
        </div>
      </main>
    </div>
  );
}

export default VideoPage;

