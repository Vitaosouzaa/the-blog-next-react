import { findPostBySlugCached } from '@/src/lib/post/queries';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';
import './singlePost.css';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className='space-article-content '>
      <header className='group flex flex-col space-single-post'>
        <Image
          className='rounded-xl'
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className='space-single-post text-xl text-slate-700 italic'>
        {post.excerpt}
      </p>

      <div>{post.content}</div>
    </article>
  );
}
