import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

function about() {
  return (
    <div className='flex'>
      <Navbar />
      <About />
    </div>
  );
}

export default about;
