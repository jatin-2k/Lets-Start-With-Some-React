import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index]

  const nextPerson = () => {
    setIndex((index) => {return (index+1)%people.length});
  }
  const prevPerson = () => {
    setIndex((index-1 >= 0) ? index-1 : people.length-1 );
  }
  const randPerson = () => {
    let nextNum = index;
    while(nextNum === index && people.length > 1) nextNum = Math.floor(Math.random()*(people.length));
    setIndex(nextNum);
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={() => {prevPerson()}}><FaChevronLeft/></button>
          <button className='prev-btn' onClick={() => {nextPerson()}}><FaChevronRight/></button>
        </div>
        <button className='random-btn' onClick={() => {randPerson()}}>Suprise me</button>
      </div>
    </article>
  );
};

export default Review;
