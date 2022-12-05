import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useDispatch, useSelector} from "react-redux";
import {findAllReviewsThunk} from "../../services/reviews-thunks";

const ReviewList = ({restaurant, critics}) => {
    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findAllReviewsThunk())})
    // useEffect(() => {dispatch(findAllReviewsForRestaurantThunk(restaurant._id))})
    return (
        <div className="list-group ttr-border-radius">
            {
                // reviews.reviews.filter(review => review.restaurantId === restaurant._id)
                reviews.reviews.slice(0).reverse()
                    .map(review =>
                             <ReviewItem
                                 key={review._id}
                                 review={review}
                                 critic={critics
                                     .filter(critic =>
                                                 critic._id === review.criticid)[0]}/>
                        )
            }
        </div>
    )
};
export default ReviewList;