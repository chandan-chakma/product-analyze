import React from 'react';

const Reviews = (props) => {
    const { name, image, rating, comment } = props.reviews;

    return (
        <div>
            <h1>{name}</h1>

        </div>
    );
};

export default Reviews;