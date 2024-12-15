import Image from 'next/image';
import Aside from './components/aside';
import Featured from './components/featured';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import GameSection from './components/gameSection';
import GameCard from './components/gameCard';

export default function Home() {
  return (
    <div className='border-2 border-purple-500 shadow-fuchsia-400 max-w-[1200px] mx-auto'>
      <Header />
      <Nav />
      <main>
        <Featured />

        <section className='flex justify-center m-4'>
          <Image
            src='/assets/PacMananimation.gif'
            width={300}
            height={300}
            alt='pacman banner ad'
          />
        </section>

        <GameSection title='Games by Alex (@Prosperitty)'>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 md:gap-20 px-4 py-2'>
            <GameCard
              title='Tic-Tac-Toe'
              imageSrc='/assets/tic-tac-toe-preview.webp'
              link='https://prosperitty.github.io/Tic-Tac-Toe/'
            />
            <GameCard
              title='BattleShip'
              imageSrc='/assets/battleship-preview.webp'
              link='https://prosperitty.github.io/Battleship/'
            />
            <GameCard
              title='Wheres the princess?'
              imageSrc='/assets/wheres-the-princess-preview.webp'
              link='https://photo-tagging-3a70f.web.app/?'
            />
            <GameCard
              title='Etch-A-Sketch'
              imageSrc='/assets/etch-a-sketch-preview.webp'
              link='https://prosperitty.github.io/etch-a-sketch/'
            />
            <GameCard
              title='Memory Card Game'
              imageSrc='/assets/memory-card-preview.webp'
              link='https://prosperitty.github.io/Memory-Card/'
            />
            <GameCard
              title='Rock-Paper-Scissors'
              imageSrc='/assets/rock-paper-scissor-preview.webp'
              link='https://prosperitty.github.io/rock-paper-scissors/'
            />
          </div>
        </GameSection>

        <section className='flex justify-center m-4'>
          <Image
            src='/assets/gamesforyou.gif'
            width={300}
            height={300}
            alt='pacman banner ad'
          />
        </section>

        <GameSection title='Additional Games'>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 md:gap-20 px-4 py-2'>
            <GameCard
              title='Skribbl.io'
              imageSrc='/assets/arcade-games/skribbl.io.webp'
              link='https://skribbl.io/'
            />
            <GameCard
              title='Snake.io'
              imageSrc='/assets/arcade-games/snake-io.webp'
              link='https://snake.io/'
            />
            <GameCard
              title='Slither.io'
              imageSrc='/assets/arcade-games/slither.io.webp'
              link='http://slither.com/io'
            />
            <GameCard
              title='Hole.io'
              imageSrc='/assets/arcade-games/hole-io.webp'
              link='https://hole-io.com/'
            />
            <GameCard
              title='Paper.io'
              imageSrc='/assets/arcade-games/paper.io.webp'
              link='https://paper-io.com/'
            />
            <GameCard
              title='Friday Night Funkin'
              imageSrc='/assets/arcade-games/friday-night-funkin.webp'
              link='https://ninja-muffin24.itch.io/funkin'
            />
            <GameCard
              title='Bonk.io'
              imageSrc='/assets/arcade-games/bonk.io.webp'
              link='https://bonk.io/'
            />
            <GameCard
              title='Incredibox - Sprunki'
              imageSrc='/assets/arcade-games/sprunki.webp'
              link='https://wolf-hal.itch.io/incredibox-sprunki'
            />
          </div>
        </GameSection>
      </main>
      <Aside />
      <Footer />
    </div>
  );
}
