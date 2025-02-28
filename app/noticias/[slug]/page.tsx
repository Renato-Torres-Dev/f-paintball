import { notFound } from "next/navigation";

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/fpaintball.wordpress.com/posts/${slug}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    return {
      id: data.id,
      title: data.title.rendered,
      content: data.content.rendered,
      imageUrl: data.jetpack_featured_media_url || "/placeholder.jpg",
    };
  } catch {
    return null;
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="w-full mt-24 min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-center mt-24 font-bold mb-4 allerta-stencil-title">{post.title.replace(/&nbsp;/g, " ")}</h1>
        <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg mb-6 mt-6" />
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-lg text-center allerta-stencil space-y-4" />
      </div>
    </div>
  );
}
