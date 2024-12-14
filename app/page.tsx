import Aside from './components/aside';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';

export default function Home() {
  return (
    <div className='border-2 border-purple-500 max-w-[1200px] mx-auto'>
      <Header />
      <Nav />
      <main>main</main>
      <Aside />
      <Footer />
      hello world
    </div>
  );
}
