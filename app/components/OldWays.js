import Image from 'next/image';

export default function OldWays() {
  return (
    <div className='relative w-full'>
      <div className='bg-black opacity-40 w-full h-full absolute top-0 left-0 z-10'></div>
      <div className='flex flex-col gap-8 absolute top-0 left-0 z-20 w-full h-full justify-center items-center text-center'>
        <div className='text-white text-2xl'>
          The Old Ways Are Still The Best Ways
        </div>
        <div className='text-white text-lg text-center'>
          We Use Real Ingredients That Make You Your Life Better Not Worse.
        </div>
      </div>

      <Image
        src='https://cdn.sanity.io/images/9ah64hh5/production/f082bb9d110bd8e597f280eb2ae38e2fe9f77da3-1708x848.webp'
        width={1920}
        height={600}
        className='z-0 object-cover'
      />
    </div>
  );
}
