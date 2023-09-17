import Image from 'next/image';
import Hamburger from './Hamburger';

export default function NavBar() {
  return (
    <div className='absolute top-0 flex flex-row w-full justify-between items-center h-13 px-6 sm:px-24 pt-10'>
      <Hamburger />

      <a href='#'>
        <Image
          src='https://cdn.sanity.io/images/9ah64hh5/production/f84b68c7b8250c9b34e29d42551ad58ce445fec0-300x47.png'
          alt='logo'
          width={300}
          height={60}
          className='cursor-pointer w-56'
        />
      </a>
      <div className='flex flex-row gap-8 items-center'>
        <a href='#' className='hidden sm:flex text-2xl hover:text-slate-700'>
          Contact Us
        </a>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-8 h-8 hover:text-slate-700 cursor-pointer '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>
      </div>
    </div>
  );
}
