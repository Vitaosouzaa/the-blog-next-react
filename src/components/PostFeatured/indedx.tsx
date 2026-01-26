import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'post';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'Capa do post',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 mb-16 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2026-01-26'
        >
          26/01/2026 10:00
        </time>

        <PostHeading as='h1' url={postLink}>
          Título do post em destaque na página inicial do blog
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum
          iure animi consectetur impedit tenetur excepturi sit aut debitis cum
          voluptatum ipsum, alias consequuntur fugiat ratione illo repellendus
          veritatis similique?
        </p>
      </div>
    </section>
  );
}
