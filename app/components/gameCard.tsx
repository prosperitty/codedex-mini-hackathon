import Image from 'next/image';
import Link from 'next/link';

export default function GameCard({
  title,
  imageSrc,
  link,
  altText,
}: {
  title: string;
  imageSrc: string;
  link: string;
  altText: string;
}) {
  return (
    <div className='h-[250px] flex flex-col'>
      <div className='relative w-full h-[100px]'>
        <Image
          src={imageSrc}
          fill
          style={{ objectFit: 'cover' }}
          alt={altText}
        />
      </div>
      <h2 className='flex-grow my-2 text-md yellow-shadow'>{title}</h2>
      <Link href={link}>
        <button className='w-full p-1 text-orange-300 orange-shadow border border-orange-300 shadow-inner shadow-orange-300 hover:text-orange-200 transition-all'>
          Play Now!
        </button>
      </Link>
      {/* <div className='flex justify-center'></div> */}
    </div>
  );
}
