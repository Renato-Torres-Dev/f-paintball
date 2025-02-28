import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";

type BlogPost = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  featured_media_url?: string;
};

interface BlogProps {
  posts: BlogPost[];
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const res = await fetch("https://public-api.wordpress.com/wp/v2/sites/fpaintball.wordpress.com/posts");
  const data: BlogPost[] = await res.json();

  const posts = data.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    link: post.link,
    featured_media_url: post.featured_media_url || "",
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalida a cada 60 segundos
  };
};

export default function Blog({ posts }: BlogProps) {
  if (!posts || posts.length === 0) {
    return <p className="text-center text-white">Nenhum post disponível.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Notícias</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-zinc-900 p-4 rounded-lg shadow-md">
            {post.featured_media_url ? (
              <Image
                src={post.featured_media_url}
                width={400}
                height={250}
                className="rounded-md"
                alt={post.title.rendered || "Imagem do post"}
              />
            ) : (
              <div className="w-[400px] h-[250px] bg-gray-800 rounded-md flex items-center justify-center text-gray-500">
                Sem imagem
              </div>
            )}
            <h2 className="text-xl font-semibold mt-4 text-white" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p className="text-zinc-400 text-sm mt-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <Link href={post.link} passHref>
              <a className="text-blue-400 hover:underline mt-3 inline-block" target="_blank" rel="noopener noreferrer">
                Ler mais →
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
