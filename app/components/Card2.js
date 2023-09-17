import Image from 'next/image';

export default function Card1() {
  return (
    <div className='shadow-addDepth bg-offBlack sm:h-[500px]  w-full rounded-2xl sm:flex flex-col sm:flex-row'>
      <div className='text-white text-left sm:w-1/2 sm:max-w-1/2 items-left justify-center flex flex-col gap-4 px-4 py-10'>
        <h1 className='text-2xl font-bold leading-relaxed'>
          "Made from fat and freedom," F-Balm is an elixir of simple yet
          powerful ingredients that get your skin glowing and your spirit
          pumping.
        </h1>{' '}
      </div>
      <Image
        src='https://cdn.sanity.io/images/9ah64hh5/production/9c02a5f2f21e3b8692e22705110098a953cc89f5-750x764.webp'
        width={800}
        height={559}
        className='sm:max-w-[50%] rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl object-cover'
      />
    </div>
  );
}
