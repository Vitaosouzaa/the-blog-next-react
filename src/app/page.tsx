import { Suspense } from 'react';
import { PostsList } from '../components/PostsList';
import { SpinLoader } from '../components/SpinLoader';

import { PostFeatured } from '../components/PostFeatured/indedx';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className='min-h-20' />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
