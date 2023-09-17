import Image from 'next/image';

export default function Card1() {
  return (
    <div className='shadow-addDepth bg-offBlack sm:h-[500px] w-full rounded-2xl sm:flex flex-col sm:flex-row'>
      <Image
        src='https://cdn.sanity.io/images/9ah64hh5/production/93c1ccac04387509d17f05f5141cadeed18de4f3-750x559.webp'
        width={800}
        height={559}
        className='sm:max-w-[50%] object-cover sm:rounded-l-2xl sm:rounded-t-none rounded-t-2xl'
      />
      <div className='text-white text-left sm:w-1/2 sm:max-w-1/2 items-left justify-center flex flex-col gap-4 p-4 pb-10'>
        <h1 className='text-2xl font-bold leading-relaxed'>
          F-Balm is a tallow-based body balm that is both cosmetic and
          therapeutic. From aging to acne, F-Balm will restore the youth and
          beauty of your skin.
        </h1>
        <button className='bg-white text-offBlack rounded-full px-4 py-2 mt-4 w-28'>
          Shop Now
        </button>
      </div>
    </div>
  );
}
