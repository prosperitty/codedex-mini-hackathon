import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex shadow-inner shadow-purple-300'>
      <h1 className='hidden md:block text-6xl p-4 text-red-300 orange-shadow leading-none'>
        ARCADE.io
      </h1>
      <h1 className='md:hidden flex justify-center items-center text-6xl px-4 py-4 text-red-300 orange-shadow'>
        A
      </h1>
      {/* <Image
        src='/assets/Miniclip_Logo_Small.svg'
        width={50}
        height={50}
        alt='Miniclip small logo'
        className='md:hidden m-4'
      />
      <Image
        src='/assets/Miniclip.svg'
        width={400}
        height={400}
        alt='Miniclip logo'
        className='hidden md:block m-4'
      /> */}

      <div className='flex-grow border-l-2 border-purple-500'>
        <div className='relative h-full px-4 py-2'>
          <Image
            src='/assets/retro-game-grid-bg.gif'
            fill={true}
            alt='retro grid background gif'
            unoptimized
          />
          <h2 className='absolute m-0 text-teal-300 blue-shadow text-xl'>
            Welcome to Arcade.io!
          </h2>
        </div>
      </div>
    </header>
  );
}
