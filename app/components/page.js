import NavBar from './NavBar';
import Hero from './Hero';
import Intro from './Intro';
import Testimonials from './Testimonials';
import Offer from './Offer';
import OldWays from './OldWays';
import Renaissance from './Renaissance';
import ProductDetails from './ProductDetails';
import Card1 from './Card1';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative overflow-hidden'>
      <div className='flex min-h-screen flex-col items-center  text-offBlack'>
        <NavBar />
        <Hero />
        <Intro />
        <Testimonials />
        <Offer />
        <OldWays />
        <Renaissance />
        <ProductDetails />
      </div>
      <Image
        src='https://cdn.sanity.io/images/9ah64hh5/production/b398e2df48aaf85ff88aafcdbc42c7a81bd53eaa-2256x2956.png'
        alt='The Tallowed Truth Cow'
        width={1350}
        height={1920}
        className='absolute top-[350px]  right-[-150px] sm:right-[-400px] opacity-30  sm:top-[60px] -z-10'
      />
    </main>
  );
}
