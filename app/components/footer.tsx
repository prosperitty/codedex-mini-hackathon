import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex justify-between items-center p-4 border-t-2 border-purple-500 shadow-inner shadow-purple-300'>
      <Image
        src='/assets/N64logo.gif'
        width={50}
        height={50}
        alt='Rotating N64 logo gif'
      />
      <p className='text-center'>
        <span className='text-teal-300 blue-shadow'>Made </span>
        <span className='text-fuchsia-300 purple-shadow'>with </span>
        <span className='text-orange-300 orange-shadow'>{'<3'} </span>
        <span className='yellow-shadow'>by </span>
        <span className='text-red-300 orange-shadow underline'>
          <Link href={'https://github.com/prosperitty'}>Alex Marmolejo</Link>
        </span>
      </p>
      <Image
        src='/assets/N64logo.gif'
        width={50}
        height={50}
        alt='Rotating N64 logo gif'
      />
    </footer>
  );
}
