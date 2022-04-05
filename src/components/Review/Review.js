import React from 'react';
import Reviews from '../Reviews/Reviews';

const Review = (props) => {
    const { name, image, comment, rating } = props.review;

    return (

            <div className='md:flex justify-center items-center border rounded-2xl m-5 '>
                <div className='m-4'>
                    <img className='w-10 rounded-full' src={image} alt="" />
                    <h2 className='text-md font-semibold'>{name}</h2>
                </div>
                <div>
                    <p className='text-sm font-normal'>{comment}</p>
                    <p className='text-xl text-yellow-500'>{rating}</p>
                </div>

            </div>
    );
};

export default Review;