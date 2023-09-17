import Image from 'next/image';

export default function Card1() {
  return (
    <div className='shadow-addDepth bg-offBlack sm:h-[500px] w-full rounded-2xl sm:flex flex-col sm:flex-row'>
      <Image
        src='https://cdn.sanity.io/images/9ah64hh5/production/195ea82bd4d8fdd50af0df478f923bc4133517e2-750x1000.webp'
        width={800}
        height={559}
        className='sm:max-w-[50%] max-h-[559px] object-cover rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl '
      />
      <div className='text-white text-left sm:w-1/2 sm:max-w-1/2 items-left justify-center flex flex-col gap-4 px-4 py-10'>
        <h1 className='text-2xl font-bold leading-relaxed'>
          Feel better instead of worse with a traditional moisturizer that
          supports your values and your health.
        </h1>
        <button className='bg-white text-offBlack rounded-full px-4 py-2 mt-4 w-28'>
          Shop Now
        </button>
      </div>
    </div>
  );
}
