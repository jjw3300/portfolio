import React, { useState, useRef } from "react";
import { Award, Play, Volume2, VolumeX } from "lucide-react";

// Dynamically import all mp4 files from the video/instagram folder
const videoModules = import.meta.glob("../../assets/video/instagram/*.mp4", {
  eager: true,
});
const LOCAL_VIDEOS = Object.values(videoModules).map(
  (mod) => (mod as { default: string }).default,
);

const ReporterVideo: React.FC<{ url: string }> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="bg-black overflow-hidden relative flex flex-col items-center justify-center group cursor-pointer h-full w-full transform-gpu"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-cover transition-transform duration-300 scale-[1.01]"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />
      {/* Overlay Gradient for controls visibility */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none transition-opacity duration-300">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
            <Play size={24} className="translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 border border-white/20"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
};

const InstagramSection: React.FC = () => {
  const [randomVideos] = useState<string[]>(() => {
    if (LOCAL_VIDEOS.length >= 2) {
      // Shuffle array to pick 2 unique random videos
      const shuffled = [...LOCAL_VIDEOS].sort(() => 0.5 - Math.random());
      return [shuffled[0], shuffled[1]];
    } else if (LOCAL_VIDEOS.length === 1) {
      return [LOCAL_VIDEOS[0], LOCAL_VIDEOS[0]];
    }
    return [];
  });

  return (
    <div className="w-full md:w-130 h-auto md:h-130 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col relative overflow-hidden transition-all duration-300 shadow-sm">
      {/* Header */}
      <div className="shrink-0 mb-3 md:mb-5 flex items-center justify-between gap-1 overflow-hidden">
        <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white flex items-center tracking-tight">
          Marketing Archive
        </h3>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-full text-xs font-bold shrink-0 border border-amber-200 dark:border-amber-500/30 shadow-sm whitespace-nowrap">
          <Award size={14} className="text-amber-500" />
          최우수상
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative flex gap-4 md:gap-6 -mx-4 md:-mx-6">
        {randomVideos.length > 0 ? (
          randomVideos.map((videoSrc, idx) => (
            <div key={idx} className="flex-1 min-w-0 h-full">
              <ReporterVideo url={videoSrc} />
            </div>
          ))
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-500 font-mono text-sm">
            No video found
          </div>
        )}
      </div>

      {/* Footer / Username */}
      <div className="shrink-0 pt-4 flex items-center justify-end">
        <span className="font-bold text-base md:text-lg text-zinc-900 dark:text-white tracking-wide">
          @ssafy_jinuk
        </span>
      </div>
    </div>
  );
};

export default InstagramSection;
