import Image from 'next/image';

export default function Featured() {
  return (
    <section className='m-4 border-2 border-purple-500 shadow-inner shadow-purple-300'>
      <h1 className='px-4 py-1 border-b-2 border-purple-500 text-xl blue-shadow text-teal-300'>
        Featured
      </h1>
      <div className='flex'>
        <Image
          src='/assets/clubpenguinmedicon.jpg'
          width={300}
          height={300}
          alt='Picture of the club penguin'
        />
        <div className='flex flex-col flex-1 px-4 py-2 border-l-2 border-purple-500'>
          <h2 className='my-2 text-xl yellow-shadow'>Club Penguin</h2>
          <p className='flex-grow py-2'>
            Make friends and play games in wonderland that is Club Penguin.
          </p>
          <div className='flex justify-end'>
            <button className='p-2 text-orange-300 orange-shadow border border-orange-300 shadow-sm shadow-orange-300 hover:text-orange-200 transition-all'>
              Play Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
