import Image from 'next/image';

export default function GameCard({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  return (
    <div className='h-[250px] flex flex-col'>
      <div className='relative w-full h-[100px]'>
        <Image src={src} fill alt='globe logo' />
      </div>
      <h2 className='flex-grow my-2 text-md yellow-shadow'>{title}</h2>
      <button className='w-full p-1 text-orange-300 orange-shadow border border-orange-300 shadow-sm shadow-orange-300 hover:text-orange-200 transition-all'>
        Play Now!
      </button>
      {/* <div className='flex justify-center'></div> */}
    </div>
  );
}
