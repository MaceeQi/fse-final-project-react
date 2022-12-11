import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useDispatch, useSelector} from "react-redux";
import {findAllReviewsForRestaurantThunk} from "../../services/reviews-thunks";
import {reviewCreated} from "./create-review";
import {reviewUpdated} from "./update-review";
import {businessCreated} from "../profile/create-business-page";

const ReviewList = ({restaurant}) => {
    const {reviews, loading} = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        if (restaurant) {
            dispatch(findAllReviewsForRestaurantThunk(restaurant._id))
        }
    }, [reviewCreated, reviewUpdated, businessCreated, restaurant]);

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
                    .map(review => review &&
                             <ReviewItem
                                 key={review._id}
                                 review={review}/>
                        )
            }
        </div>
    )
};
export default ReviewList;
