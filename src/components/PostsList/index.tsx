import { PostCoverImage } from '../PostCoverImage';

import './postList.css';
import { PostSummary } from '../PostSummary';
import { findAllPublicPosts } from '@/src/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <section className='grid grid-cols-1 mb-16 gap-8 space sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className='flex flex-col group gap-4' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              postLink={postLink}
              postHeading='h2'
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </section>
  );
}
