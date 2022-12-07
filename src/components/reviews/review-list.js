import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useDispatch, useSelector} from "react-redux";
import {findAllReviewsForRestaurantThunk} from "../../services/reviews-thunks";

const ReviewList = ({restaurant}) => {
    console.log(restaurant);

    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    // useEffect(() => {dispatch(findAllReviewsThunk())})
    useEffect(() => {
        if (restaurant) {
            dispatch(findAllReviewsForRestaurantThunk(restaurant._id))
        }
    }, [restaurant, dispatch]);

    return (
        <div className="list-group ttr-border-radius">
            {
                reviews &&
                reviews.reviews.slice(0).reverse()
                    .map(review =>
                             <ReviewItem
                                 key={review._id}
                                 review={review}/>
                        )
            }
        </div>
    )
};
export default ReviewList;