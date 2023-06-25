import React, { useState, useEffect } from 'react';

export default function Flexible () {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['fun math tutor', 'kind mathematician', 'mysterious adventurer', 'commanding captain', 'hardy pirate'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
   <div className='flex justify-center items-center h-full'>
    <p className='transition-all duration-300 text-3xl -mt-24'>
      "Be a {' '}
      <span className="inline-block animate-scrolling-word">{words[wordIndex]}</span>
      "
    </p>
    </div>
  );
};