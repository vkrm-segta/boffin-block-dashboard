import React from 'react';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';

function home() {
  return (
    <div className='flex'>
      <Navbar />
      <Home />
    </div>
  );
}

export default home;
