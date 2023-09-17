'use client';
import gsap from 'gsap';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    text: '"My skin is clearer than ever before. I can\'t believe how much better I feel."',
    name: 'Sally',
    location: 'Los Angeles',
  },
  {
    text: '"I never thought I\'d find a skincare product that I could eat. Thank you so much."',
    name: 'John',
    location: 'New York',
  },
  {
    text: '"I feel so much more confident in my skin. I love what Tallowed has done for me."',
    name: 'Kate',
    location: 'Chicago',
  },
]; // As you've provided

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const slideTestimonials = (direction) => {
    const newIndex = index + direction;
    if (newIndex < 0) {
      setIndex(testimonials.length - 1);
    } else if (newIndex >= testimonials.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  // React's useEffect to trigger GSAP animation when the index changes
  useEffect(() => {
    gsap.to('.testimonial', {
      xPercent: -100 * index,
      ease: 'ease-in-out',
      duration: 1,
    });
  }, [index]);

  return (
    <div className='bg-offBlack w-full px-2 sm:px-0 flex items-center justify-center'>
      <div className='text-white flex flex-col pb-10 items-center sm:max-w-3xl lg:max-w-5xl'>
        <div className='testimonial-container flex transition-all py-24  overflow-hidden'>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className='testimonial flex flex-col basis-full shrink-0 grow-0 text-center sm:text-left'
            >
              <div className='text-3xl sm:text-6xl'>{testimonial.text}</div>
              <div className='text-2xl sm:text-4xl mt-10'>
                {testimonial.name}
              </div>
              <div className='text-2xl sm:text-4xl'>{testimonial.location}</div>
            </div>
          ))}
        </div>
        <div className='flex gap-16 justify-center items-center mt-2'>
          <div
            className='text-2xl cursor-pointer'
            onClick={() => slideTestimonials(-1)}
          >
            &#60;
          </div>
          <div
            className='text-2xl cursor-pointer'
            onClick={() => slideTestimonials(1)}
          >
            &#62;
          </div>
        </div>
      </div>
    </div>
  );
}
