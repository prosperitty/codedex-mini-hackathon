import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-around px-4 border-y-2 border-purple-500 shadow-inner shadow-purple-300'>
        <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#home'
        >
          <li>Home</li>
        </Link>
        <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#featured'
        >
          <li>Featured</li>
        </Link>
        <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#games'
        >
          <li>Games</li>
        </Link>
        {/* <Link
          className='flex-grow text-center text-xl text-fuchsia-300 purple-shadow hover:text-fuchsia-200 transition-all'
          href='/#'
        >
          <li>Account</li>
        </Link> */}
      </ul>
    </nav>
  );
}
