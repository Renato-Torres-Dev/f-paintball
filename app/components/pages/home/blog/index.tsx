"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const BlogHome = () => {
  useEffect(() => {
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
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".vertical-slide-carousel .swiper-pagination",
        clickable: true,
      },
    });

    return () => swiper.destroy(); // Limpa o Swiper ao desmontar o componente
  }, []);

  return (
    <div className="w-full relative">
      <div className="swiper vertical-slide-carousel swiper-container relative h-96">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <span className="text-3xl font-semibold text-indigo-600">Slide 1</span>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <span className="text-3xl font-semibold text-indigo-600">Slide 2</span>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <span className="text-3xl font-semibold text-indigo-600">Slide 3</span>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};
