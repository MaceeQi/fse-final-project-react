import React from "react";
import * as service from "../../services/reviews-service";
import Tuit from "../tuits/tuit";

export const Review = () => {
    const testReviews = [
        {restaurantid: "123", uid: "123", reviewid: "1234", review: "Great restaurant!"},
        {restaurantid: "123", uid: "456", reviewid: "2345", review: "Decent price for its quality"},
        {restaurantid: "123", uid: "789", reviewid: "3456", review: "Amazing"}
    ]

    const findAllReviews = (restaurantid) =>
        service.findAllReviews(restaurantid);

    const updateReview = (restaurantid, uid, reviewid, review) =>
        service.updateReview(restaurantid, uid, reviewid, review)
            .then(findAllReviews(restaurantid));

    const deleteReview = (restaurantid, uid, reviewid) =>
        service.deleteReview(restaurantid, uid, reviewid)
            .then(findAllReviews(restaurantid));

    return (
        <div>
            <h2>Professional Reviews</h2>
            <ul>
                {
                    testReviews.map && testReviews.map(item => {
                        return (
                            <Tuit tuit={item.review}/>
                        );
                    })
                }
            </ul>
        </div>
    )
}