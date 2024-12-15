import Image from 'next/image';

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
        <span>Made </span>
        <span>with </span>
        <span>{'<3'} </span>
        <span>by Alex Marmolejo</span>
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
