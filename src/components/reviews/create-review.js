import React, {useState} from "react";
import * as service from "../../services/reviews-service";
import Tuit from "../tuits/tuit";

export const CreateReview = () => {
    const findAllReviews = (restaurantId) =>
        service.findAllReviews(restaurantId);

    const createReview = (restaurantId, criticId, review) =>
        service.createReview(restaurantId, criticId, review)
            .then(findAllReviews(restaurantId));

    const updateReview = (restaurantId, criticId, reviewid, review) =>
        service.updateReview(restaurantId, criticId, reviewid, review)
            .then(findAllReviews(restaurantId));

    const deleteReview = (restaurantId, criticId, reviewid) =>
        service.deleteReview(restaurantId, criticId, reviewid)
            .then(findAllReviews(restaurantId));

    const [review, setReview] = useState({review: ''});
    const reviewChangeHandler = (event) => {
        const currentReview = event.target.value;
        const newReview = {
            review: currentReview
        };
        setReview(newReview);
    }

    return (
        <div>
            <h2>Professional Reviews</h2>
            <input placeholder={"Input review here"}
                   onChange={reviewChangeHandler}
                   value={review.review}/>
            <button onClick={createReview}>Submit</button>
            {/*<ul>*/}
            {/*    {*/}
            {/*        reviews.map && reviews.map(item => {*/}
            {/*            return (*/}
            {/*                <Tuit tuit={item.review}/>*/}
            {/*            );*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}
        </div>
    )
}