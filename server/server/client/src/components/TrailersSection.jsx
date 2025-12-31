import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-5xl mx-auto">
        Trailers
      </p>

      {/* MAIN PLAYER */}
      <div className="relative mt-6 aspect-video max-w-5xl mx-auto">
        <div className="absolute inset-0 -z-10">
          <BlurCircle top="-100px" right="-100px" />
        </div>

        {currentTrailer?.videoUrl && (
          <ReactPlayer
            key={currentTrailer.videoUrl} // 🔥 important
            url={currentTrailer.videoUrl} // ✅ dynamic
            playing
            muted
            controls
            width="100%"
            height="100%"
            playsinline
            className="absolute inset-0"
          />
        )}
      </div>

      {/* TRAILER THUMBNAILS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrailer(trailer)}
            className={`relative cursor-pointer overflow-hidden rounded-lg h-40 md:h-60
              transform transition duration-300 hover:-translate-y-1
              ${currentTrailer === trailer ? 'opacity-100' : 'opacity-70'}
            `}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 h-8 md:w-10 md:h-10
              -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
