import React from 'react';
import '../../App.css';
import Cards from '../Cards';

export default function Gallery() {
  return (
    <>
      <h1 className='gallery'>Gallery</h1>
      <h1 className='country'>Switzerland</h1>
      <Cards />
      <h1 className='country'>Iceland</h1>
      <Cards />
    </>
  );
}
