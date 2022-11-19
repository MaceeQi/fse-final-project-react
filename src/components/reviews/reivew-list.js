import React from "react";
import * as service from "../../services/reviews-service";
import ReviewItem from "./review-item";
import "./reviews.css";
import {useSelector} from "react-redux";

const ReviewList = ({restaurant, critics}) => {
    const reviews = useSelector(state => state.reviews);

    return (
        <div className="list-group ttr-border-radius">
            {
                reviews.filter(review => review.restaurantId === restaurant._id)
                    .map(review =>
                             <ReviewItem
                                 key={review._id}
                                 review={review}
                                 critic={critics
                                     .filter(critic =>
                                                 critic._id === review.criticId)[0]}/>
                        )
            }
        </div>
    )
};
export default ReviewList;