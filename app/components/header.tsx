import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex'>
      <Image
        src='/assets/Miniclip_Logo_Small.svg'
        width={50}
        height={50}
        alt='Miniclip logo'
        className='md:hidden m-4'
      />
      <Image
        src='/assets/Miniclip.svg'
        width={400}
        height={400}
        alt='Miniclip logo'
        className='hidden md:block m-4'
      />

      <div className='flex-grow border-l-2 border-purple-500'>
        <div className='relative h-full px-4 py-2'>
          <Image
            src='/assets/retro-game-grid-bg.gif'
            fill={true}
            alt='retro background gif grid'
          />
          <h2 className='absolute m-0 text-fuchsia-300 purple-shadow text-xl'>
            Welcome to Miniclip!
          </h2>
        </div>
      </div>
    </header>
  );
}
