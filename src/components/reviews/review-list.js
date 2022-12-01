import React, {useEffect} from "react";
import * as service from "../../services/reviews-service";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useDispatch, useSelector} from "react-redux";
import {findAllReviewsThunk} from "../../services/reviews-thunks";

const ReviewList = ({restaurant, critics}) => {
    const {reviews, loading} = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findAllReviewsThunk())}, [])

    return (
        <div className="list-group ttr-border-radius">
            {loading &&
            <li className="list-group-item">
                Loading...
            </li>}
            {
                reviews.filter(review => review.restaurantId === restaurant._id)
                    .map(review =>
                             <ReviewItem
                                 key={review._id}
                                 review={review.review}
                                 critic={critics
                                     .filter(critic =>
                                                 critic._id === review.criticId)[0]}/>
                        )
            }
        </div>
    )
};
export default ReviewList;