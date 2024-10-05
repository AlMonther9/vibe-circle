// import Link from 'next/link';
'use client';
// import { LatestPost } from '@/app/_components/post';
// import { getServerAuthSession } from '@/server/auth';
// import { HydrateClient } from '@/trpc/server';
import { useSignIn } from '@/hooks/useSignIn';
import PopUpSignIn from '@/app/_components/auth/signin';
export default function Home() {
  // const hello = await api.post.hello({ text: 'from tRPC' });
  // const session = await getServerAuthSession();
  const { isSignInOpen, handleSignIn } = useSignIn();
  //void api.post.getLatest.prefetch();

  return (
    // <HydrateClient>
    <main
      className='flex min-h-screen flex-col items-center justify-center
     bg-calma-700 text-white px-56'
    >
      <h1 className='text-3xl font-bold'>Welcome to Vibes Circle</h1>
      <button className='bg-sky-500 text-white px-4 py-2 mt-4 rounded' onClick={handleSignIn}>
        Join Us
      </button>
      <p className='mb-9 text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur dicta tempora
        aperiam facilis. Sequi obcaecati delectus quibusdam nulla nostrum ab, ex architecto deserunt
        tempore, commodi, minima itaque atque. Quis.
      </p>
      <p className='mb-9 text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur dicta tempora
        aperiam facilis. Sequi obcaecati delectus quibusdam nulla nostrum ab, ex architecto deserunt
        tempore, commodi, minima itaque atque. Quis.
      </p>
      <p className='mb-9 text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur dicta tempora
        aperiam facilis. Sequi obcaecati delectus quibusdam nulla nostrum ab, ex architecto deserunt
        tempore, commodi, minima itaque atque. Quis.
      </p>
      {/* Conditionally render the Sign-In popup */}
      {isSignInOpen && <PopUpSignIn handleSignIn={handleSignIn} />}
    </main>
    // </HydrateClient>
  );
}
