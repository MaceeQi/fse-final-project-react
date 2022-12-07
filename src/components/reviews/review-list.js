import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useDispatch, useSelector} from "react-redux";
import {findAllReviewsForRestaurantThunk} from "../../services/reviews-thunks";
import {useLocation} from "react-router-dom";

const ReviewList = ({restaurant, critics}) => {
    const reviews = useSelector(state => state.reviews);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const restaurantid = paths[paths.length-1];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllReviewsForRestaurantThunk(restaurantid))
    }, [dispatch, restaurantid])
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