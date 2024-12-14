import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-around border-y-2 border-purple-500'>
        <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#'
        >
          <li>Home</li>
        </Link>
        <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#'
        >
          <li>Games</li>
        </Link>
        <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#'
        >
          <li>Multiplayer Games</li>
        </Link>
        <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#'
        >
          <li>Account</li>
        </Link>
      </ul>
    </nav>
  );
}
