import React from "react";
import * as service from "../../services/reviews-service";
import reviews from "./sample-reviews.json";
import ReviewItem from "./review-item";
import critics from "../data/critic-users.json";
import "./reviews.css";

const ReviewList = ({restaurant}) => {
    // const testReviews = [
    //     {restaurantid: "123", uid: "123", reviewid: "1234", review: "Great restaurant!"},
    //     {restaurantid: "123", uid: "456", reviewid: "2345", review: "Decent price for its quality"},
    //     {restaurantid: "123", uid: "789", reviewid: "3456", review: "Amazing"}
    // ]
    //
    // const findAllReviews = (restaurantid) =>
    //     service.findAllReviews(restaurantid);
    //
    // const updateReview = (restaurantid, uid, reviewid, review) =>
    //     service.updateReview(restaurantid, uid, reviewid, review)
    //         .then(findAllReviews(restaurantid));
    //
    // const deleteReview = (restaurantid, uid, reviewid) =>
    //     service.deleteReview(restaurantid, uid, reviewid)
    //         .then(findAllReviews(restaurantid));

    return (
        <div className="mb-3 border ttr-border-radius">
            <div className="m-2">
                <h5 className="m-2 fw-bolder">Professional Reviews</h5>
                <ul className="list-group ttr-border-radius">
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
                </ul>
            </div>
        </div>
    )
};
export default ReviewList;