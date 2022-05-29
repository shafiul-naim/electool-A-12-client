import React from 'react';

const ShowReview = ({review}) => {
    return (
        <div className="card lg:card-side pt-5 shadow-xl bg-gradient-to-r from-secondary to-primary">
        
        <div className="card-body text-white">
          <h2 className="card-title text-3xl">{review.name}</h2>
          <p className='text-2xl'>{review.description}</p>
          <p className='text-2xl'>Rating: {review.rating}</p>
        </div>
      </div>
    );
};

export default ShowReview;