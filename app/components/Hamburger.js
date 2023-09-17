'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Hamburger() {
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // run when `isOpen` changes
  useLayoutEffect(() => {
    if (isOpen) {
      const ctx = gsap.context(() => {
        gsap.to(menuRef.current, {
          ease: 'power4.out',
          duration: 2,
          x: 0,
        });
        return () => ctx.revert();
      });
    } else {
      const ctx = gsap.context(() => {
        gsap.to(menuRef.current, {
          ease: 'power4.out',
          duration: 2,
          x: -244,
        });
        return () => ctx.revert();
      });
    }
  }, [isOpen]);

  return (
    <div className='relative sm:hidden z-40'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        onClick={() => setIsOpen(true)}
        className='w-6 h-6 cursor-pointer hover:text-slate-700'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        />
      </svg>
      <div
        ref={menuRef}
        className={`
           bg-white fixed top-0 left-0 h-full w-60 flex flex-col items-center gap-5 pt-24 text-xl`}
      >
        <div className='flex justify-start w-full pl-6 hover:text-slate-700 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            onClick={() => setIsOpen(false)}
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='hover:text-slate-700 cursor-pointer'>Contact Us</div>
        <div className='hover:text-slate-700 cursor-pointer'>Blog</div>
      </div>
    </div>
  );
}
