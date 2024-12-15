import Image from 'next/image';
import Featured from './components/featured';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import GameSection from './components/gameSection';
import GameCard from './components/gameCard';

export default function Home() {
  return (
    <div
      className='border-2 border-purple-500 shadow-fuchsia-400 max-w-[1200px] mx-auto'
      id='home'
    >
      <div className='sticky top-0 z-10 bg-gray-900'>
        <Header />
        <Nav />
      </div>
      <main>
        <Featured />

        <section className='flex justify-center mx-4 my-8'>
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
              altText='Tic Tac Toe website preview'
            />
            <GameCard
              title='BattleShip'
              imageSrc='/assets/battleship-preview.webp'
              link='https://prosperitty.github.io/Battleship/'
              altText='battle ship game website preview'
            />
            <GameCard
              title='Wheres the princess?'
              imageSrc='/assets/wheres-the-princess-preview.webp'
              link='https://photo-tagging-3a70f.web.app/?'
              altText='wheres the princess game website preview'
            />
            <GameCard
              title='Etch-A-Sketch'
              imageSrc='/assets/etch-a-sketch-preview.webp'
              link='https://prosperitty.github.io/etch-a-sketch/'
              altText='etch a sketch game website preview'
            />
            <GameCard
              title='Memory Card Game'
              imageSrc='/assets/memory-card-preview.webp'
              link='https://prosperitty.github.io/Memory-Card/'
              altText='memory card game website preview'
            />
            <GameCard
              title='Rock-Paper-Scissors'
              imageSrc='/assets/rock-paper-scissor-preview.webp'
              link='https://prosperitty.github.io/rock-paper-scissors/'
              altText='rock paper scissors game website preview'
            />
          </div>
        </GameSection>

        <section className='flex justify-center mx-4 my-8'>
          <Image
            src='/assets/gamesforyou.gif'
            width={300}
            height={300}
            alt='games for you gif'
          />
        </section>

        <GameSection title='Additional Games'>
          <div
            className='grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 md:gap-20 px-4 py-2'
            id='games'
          >
            <GameCard
              title='Skribbl.io'
              imageSrc='/assets/arcade-games/skribbl.io.webp'
              link='https://skribbl.io/'
              altText='Skribblio game cover'
            />
            <GameCard
              title='Snake.io'
              imageSrc='/assets/arcade-games/snake-io.webp'
              link='https://snake.io/'
              altText='snake io game cover'
            />
            <GameCard
              title='Slither.io'
              imageSrc='/assets/arcade-games/slither.io.webp'
              link='http://slither.com/io'
              altText='slither io game cover'
            />
            <GameCard
              title='Hole.io'
              imageSrc='/assets/arcade-games/hole-io.webp'
              link='https://hole-io.com/'
              altText='hole io game cover'
            />
            <GameCard
              title='Paper.io'
              imageSrc='/assets/arcade-games/paper.io.webp'
              link='https://paper-io.com/'
              altText='paper io game cover'
            />
            <GameCard
              title='Friday Night Funkin'
              imageSrc='/assets/arcade-games/friday-night-funkin.webp'
              link='https://ninja-muffin24.itch.io/funkin'
              altText='friday night funkin game cover'
            />
            <GameCard
              title='Bonk.io'
              imageSrc='/assets/arcade-games/bonk.io.webp'
              link='https://bonk.io/'
              altText='bonk io game cover'
            />
            <GameCard
              title='Incredibox - Sprunki'
              imageSrc='/assets/arcade-games/sprunki.webp'
              link='https://wolf-hal.itch.io/incredibox-sprunki'
              altText='sprunki game cover'
            />
            <GameCard
              title='Pacman'
              imageSrc='/assets/arcade-games/pacman-cover.webp'
              link='https://freepacman.org/'
              altText='pacman game cover'
            />
          </div>
        </GameSection>
      </main>
      <section className='flex justify-around items-center mx-4 my-8 gap-4'>
        <div>
          <Image
            src='/assets/anime-90s.gif'
            width={200}
            height={200}
            alt='anime girl riding in the passenger side of a car'
          />
        </div>
        <div className='border-4 rounded-lg border-cyan-500 shadow-lg shadow-cyan-300'>
          <h2 className='text-2xl md:text-7xl lg:text-8xl text-fuchsia-300 purple-shadow'>
            ARCADE
          </h2>
        </div>
        <div>
          <Image
            src='/assets/anime-drinking-90s.GIF'
            width={200}
            height={200}
            alt='anime girl chugging a drink with excitement'
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
