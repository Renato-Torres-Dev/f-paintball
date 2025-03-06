"use client"

import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div className="flex justify-center">
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        width="750px"
        height="400px"
        className="rounded-lg"
      />
    </div>
  );
};

export const Videos = () => {
	const [videos, setVideos] = useState<any[]>([]);

	useEffect(() => {
		const fetchVideos = async () => {
			const res = await fetch("/api/youtube");
			const data = await res.json();

			console.log("Dados da API do YouTube: ", data);


			if (Array.isArray(data)) {
				setVideos(data);
			} else if (data.items) {
				setVideos(data.items);
			}
		};

		fetchVideos();
	}, []);

	const validVideos = videos.filter(video => video.id.videoId);

	return (
		<section className="w-full sm:min-h-[600px] py-32 sm:pb-24 px-6 bg-black flex flex-col items-center justify-center">
			<div className="items-center py-16">
				<h1 className="text-center text-4xl allerta-stencil-title text-white">VÍDEOS F-PAINTBALL</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {validVideos?.map((video) => (
          <YouTubePlayer key={video.id.videoId} videoId={video.id.videoId} />
        ))}
      </div>
		</section>
	)
}