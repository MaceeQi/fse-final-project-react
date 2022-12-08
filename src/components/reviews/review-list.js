import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useDispatch, useSelector} from "react-redux";
import {findAllReviewsForRestaurantThunk} from "../../services/reviews-thunks";
import {reviewCreated} from "./create-review";
import {reviewUpdated} from "./update-review";

const ReviewList = ({restaurant}) => {
    // console.log(restaurant);

    const {reviews, loading} = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        if (restaurant) {
            dispatch(findAllReviewsForRestaurantThunk(restaurant._id))
        }
    }, [reviewCreated, reviewUpdated]);

    return (
        <div className="list-group ttr-border-radius">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading && reviews &&
                reviews.slice(0).reverse()
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
