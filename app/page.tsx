import Image from 'next/image';
import Aside from './components/aside';
import Featured from './components/featured';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';

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
        main
      </main>
      <Aside />
      <Footer />
      hello world
    </div>
  );
}
