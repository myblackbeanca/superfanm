import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailSrc: string;
  videoUrl: string;
}

function VideoCard({ title, description, thumbnailSrc, videoUrl }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-video group">
        <img 
          src={thumbnailSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <a 
          href={videoUrl}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-8 h-8 text-purple-600 ml-1" />
          </div>
        </a>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function VideoSection() {
  const videos = [
    {
      title: "MINY at Live Venue",
      description: "Experience the magic of MINY at a live concert venue",
      thumbnailSrc: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
      videoUrl: "#venue-unboxing"
    },
    {
      title: "Home Unboxing Experience",
      description: "Watch fans unbox their exclusive MINY collections",
      thumbnailSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
      videoUrl: "#home-unboxing"
    },
    {
      title: "MINY Store Launch",
      description: "Join us for the grand opening of our first MINY store",
      thumbnailSrc: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80",
      videoUrl: "#store-unboxing"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}