import GameCard from './gameCard';

export default function GameSection({ title }: { title: string }) {
  return (
    <section className='m-4 border-2 border-purple-500 shadow-inner shadow-purple-300'>
      <h1 className='px-4 py-1 border-b-2 border-purple-500 text-xl blue-shadow text-teal-300'>
        {title}
      </h1>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 md:gap-20 px-4 py-2'>
        <GameCard title='Tic-Tac-Toe' src='/assets/clubpenguinmedicon.jpg' />
        <GameCard title='BattleShip' src='/assets/clubpenguinmedicon.jpg' />
        <GameCard
          title='Wheres the princess?'
          src='/assets/clubpenguinmedicon.jpg'
        />
        <GameCard title='Etch-A-Sketch' src='/assets/clubpenguinmedicon.jpg' />
      </div>
    </section>
  );
}
