import Image from 'next/image';

export default function Hero() {
  return (
    <div className='h-[500px] pt-20 sm:pt-0 sm:h-[1000px] sm:grid sm:grid-cols-12 sm:gap-4 max-w-7xl min-w-[1024px]'>
      <div className='flex flex-col justify-center items-center sm:col-start-3 md:col-start-2 lg:col-start-1 sm:col-span-6'>
        <h2 className='text-3xl sm:text-4xl flex flex-col gap-4 text-center mt-40 sm:mt-36 max-w-[350px]'>
          Based Cosmetics for Healthy Humans
        </h2>
        {/* offBlack button with rounded corners */}
        <button className='bg-offBlack text-white rounded-full px-4 py-2 mt-4 w-28'>
          Shop Now
        </button>
      </div>
    </div>
  );
}
