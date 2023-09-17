import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

export default function ProductDetails() {
  return (
    <div className='px-2 sm:px-24 py-48'>
      <div className='flex flex-col gap-12 text-center items-center justify-center w-full sm:max-w-3xl lg:max-w-5xl'>
        <h1 className='text-6xl font-bold'>Our first product...</h1>
        <p className='text-lg max-w-xl'>
          We wanted to make a splash in the skin care world... so that's exactly
          what we did...introducing:
        </p>
        <h1 className='text-6xl font-bold'>"F-Balm"</h1>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}
