import React from 'react';
import { HexagonImage } from './HexagonImage';
import { Play, User } from 'lucide-react';

interface MinyCardProps {
  artistName: string;
  mixtapeName: string;
  imageSrc: string;
  epkLink: string;
  playLink: string;
}

export function MinyCard({ artistName, mixtapeName, imageSrc, epkLink, playLink }: MinyCardProps) {
  return (
    <div className="group relative">
      <HexagonImage 
        src={imageSrc}
        alt={`${artistName} - ${mixtapeName}`}
        className="w-48 h-48 mx-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-4">
          <a 
            href={playLink}
            className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors"
            title="Play Mixtape"
          >
            <Play className="w-6 h-6 text-white" />
          </a>
          <a 
            href={epkLink}
            className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors"
            title="View EPK"
          >
            <User className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="font-bold text-lg">{artistName}</h3>
        <p className="text-gray-600">{mixtapeName}</p>
      </div>
    </div>
  );
}