"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
}

export default function BlogGrid() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/fpaintball.wordpress.com/posts");
        const data: any[] = await response.json();
        const formattedPosts: Post[] = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          url: post.link,
          imageUrl: post.jetpack_featured_media_url || "/placeholder.jpg",
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="w-full h-[100vh] mt-24 pt-24 pb-12 bg-black">
      <h2 className="text-4xl text-center text-white mb-8 allerta-stencil-title">Últimas Notícias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {posts.map((post) => (
          <Link href={`/noticias/${post.id}`} key={post.id} className="relative rounded-2xl overflow-hidden group h-64 bg-gray-800">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${post.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/50 flex items-end p-4">
            <h3 className="text-white text-xl font-semibold allerta-stencil-title bg-black/50 p-2 rounded-lg">{post.title.replace(/&nbsp;/g, " ")}</h3>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
}
