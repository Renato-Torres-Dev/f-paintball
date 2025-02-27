"use client";

import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface BlogPost {
  id: string;
  title: string;
  imageUrl: string;
  url: string;
}

export const BlogHome = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "O próximo jogo do F-Paintball será dia 16/03/25",
      imageUrl: "/images/img00001.png",
      url: "/blog/post-1"
    },
    {
      id: "2",
      title: "Calendário 2025 Liga R.A. Nordeste saiu",
      imageUrl: "/images/img00002.png",
      url: "/blog/post-2"
    },
    {
      id: "3",
      title: "Novo campo em Caruaru inaugura",
      imageUrl: "/images/img00003.png",
      url: "/blog/post-3"
    },
  ]);

  useEffect(() => {
    if (posts.length > 0) {
      const swiper = new Swiper(".vertical-slide-carousel", {
        modules: [Pagination, Mousewheel, Autoplay],
        loop: true,
        direction: "vertical",
        mousewheel: {
          releaseOnEdges: true,
        },
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".vertical-slide-carousel .swiper-pagination",
          clickable: true,
        },
      });
      return () => swiper.destroy();
    }
  }, [posts]);

  return (
    <div className="w-full relative py-12 bg-black">
      <h2 className="text-4xl allerta-stencil-title text-center text-white-600 mb-8">Últimas Notícias</h2>
      <div className="swiper vertical-slide-carousel swiper-container relative h-96">
        <div className="swiper-wrapper">
          {posts.map((post) => (
            <div key={post.id} className="swiper-slide">
              <div 
                className="rounded-2xl h-96 flex flex-col justify-end items-center py-8 m-4 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              >
                <a 
                  href={post.url} 
                  className="text-3xl font-semibold text-white allerta-stencil bg-black/50 p-2 rounded-lg"
                >
                  {post.title}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="swiper-pagination"></div> */}
      </div>
    </div>
  );
};