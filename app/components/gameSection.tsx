// import GameCard from './gameCard';

export default function GameSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='m-4 border-2 border-purple-500 shadow-inner shadow-purple-300'>
      <h1 className='px-4 py-1 border-b-2 border-purple-500 text-xl blue-shadow text-teal-300'>
        {title}
      </h1>
      {children}
    </section>
  );
}
