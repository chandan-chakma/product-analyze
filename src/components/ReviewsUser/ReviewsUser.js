import React from 'react';
import Reviews from '../Reviews/Reviews';

const ReviewsUser = () => {
    const reviewDetails = [
        { id: 1, name: 'prime', comment: 'awesome', rating: '4.5', image: 'https://kyoron21.net//Honcil/userimage/02/Member_02121146_1.jpg' },
        { id: 1, name: 'prime', comment: 'awesome', rating: '4.5', image: 'https://kyoron21.net//Honcil/userimage/02/Member_02121146_1.jpg' },
        { id: 1, name: 'prime', comment: 'awesome', rating: '4.5', image: 'https://kyoron21.net//Honcil/userimage/02/Member_02121146_1.jpg' }
        ,
        { id: 1, name: 'prime', comment: 'awesome', rating: '4.5', image: 'https://kyoron21.net//Honcil/userimage/02/Member_02121146_1.jpg' },

        { id: 1, name: 'prime', comment: 'awesome', rating: '4.5', image: 'https://kyoron21.net//Honcil/userimage/02/Member_02121146_1.jpg' },

        { id: 1, name: 'prime', comment: 'awesome', rating: '4.5', image: 'https://kyoron21.net//Honcil/userimage/02/Member_02121146_1.jpg' }
    ]
    return (
        <div>
            {
                reviewDetails.map(reviews => <Reviews
                    key={reviews.id}
                    reviews={reviews}
                ></Reviews>)
            }

        </div>
    );
};

export default ReviewsUser;