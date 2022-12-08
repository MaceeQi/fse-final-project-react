import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useDispatch, useSelector} from "react-redux";
import {findAllReviewsForRestaurantThunk} from "../../services/reviews-thunks";

const ReviewList = ({restaurant, critics}) => {
    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    // useEffect(() => {dispatch(findAllReviewsThunk())})
    useEffect(() => {
        if (restaurant) {
            dispatch(findAllReviewsForRestaurantThunk(restaurant._id))
        }
    }, [reviews.reviews.length]);
    return (
        <div className="list-group ttr-border-radius">
            {
                // reviews.reviews.filter(review => review.restaurant === restaurant._id).slice(0).reverse()
                reviews.reviews.slice(0).reverse()
                    .map(review =>
                             <ReviewItem
                                 key={review._id}
                                 review={review}
                                 critic={critics
                                     .filter(critic =>
                                                 critic._id === review.criticid)[0]}
                            />
                        )
            }
        </div>
    )
};
export default ReviewList;