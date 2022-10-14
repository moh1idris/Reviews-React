import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);                                  //--> 
  const {name,job,text,image} = people[index];                           //-->people will change when index will change
   
  const checkNumber = (number)=>{                                        //--> this will act like a  loop  it will go round and round 
    if(number > people.length - 1){
      return 0
    }
    if(number < 0){
      return people.length - 1;
    }
    return number;
  }
  
  const nextPerson = ()=>{
    setIndex((index)=>{                                                  //--> whatever we return from here will be the  the usestate value
    let newIndex = index + 1;
    // return newIndex;
    return checkNumber(newIndex);
    });
  };

  const prevPerson = ()=>{
    setIndex((index)=>{                                                  //--> whatever we return from here will be the  the usestate value
    let newIndex = index - 1;
    // return newIndex;
    return checkNumber(newIndex);
    });
  };

  const randomPerson = ()=>{
   let randomNumber = Math.floor(Math.random() * people.length);         //--> this will normally gives the random Index to the button
   if(randomNumber === index){                                           //--> if the index and the random number is same then u use this to over come this 
    randomNumber = index + 1;
   }
    setIndex(checkNumber(randomNumber));                                                                    //--> here if the index if 3 can't go up so need to check 
  }


  return (
  <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
      <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
  </article>
  );
};

export default Review;
