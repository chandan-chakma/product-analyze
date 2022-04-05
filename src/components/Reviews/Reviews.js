import useFakeDb from '../../hooks/useFakeDb';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useFakeDb();
    return (

        < div className='grid grid-cols-2 gap-2' >

            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }

        </div >
    );
};

export default Reviews;