import React from 'react';

const Review = (props) => {
    const { name } = props.review;
    return (
        <div>
            <h3>name:{name}</h3>

        </div>
    );
};

export default Review;