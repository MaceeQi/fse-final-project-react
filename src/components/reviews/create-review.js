import React, {useState} from "react";
import * as service from "../../services/reviews-service";
import Tuit from "../tuits/tuit";
import {createReview} from "./review-reducer";
import {useDispatch} from "react-redux";

const CreateReview = ({restaurant, critic}) => {
    // const findAllReviews = (restaurantId) =>
    //     service.findAllReviews(restaurantId);
    //
    // const createReview = (restaurantId, criticId, review) =>
    //     service.createReview(restaurantId, criticId, review)
    //         .then(findAllReviews(restaurantId));
    //
    // const updateReview = (restaurantId, criticId, reviewid, review) =>
    //     service.updateReview(restaurantId, criticId, reviewid, review)
    //         .then(findAllReviews(restaurantId));
    //
    // const deleteReview = (restaurantId, criticId, reviewid) =>
    //     service.deleteReview(restaurantId, criticId, reviewid)
    //         .then(findAllReviews(restaurantId));

    const [review, setReview] = useState('');
    const reviewChangeHandler = (event) => {
        setReview(event.target.value);
    }
    const dispatch = useDispatch();
    const reviewSubmitHandler = () => {
        const newReview = {
            review: review,
            restaurantId: restaurant._id,
            criticId: critic._id
        }
        dispatch(createReview(newReview));
    }

    return (
        <div className="mt-2 mb-2">
            <div className="row row-cols-12 mb-2">
                <div className="col-10 justify-content-start">
                    <textarea className="float-start w-100 border ttr-border-radius p-2"
                              placeholder="Write down your reviews!"
                              onChange={reviewChangeHandler}
                              value={review}/>
                </div>
                <div className="col-2">
                    <button
                        onClick={reviewSubmitHandler}
                        className="btn btn-white btn-sm border
                rounded-pill fw-bolder position-relative float-end ps-2 pe-2">Submit</button>

                </div>
            </div>
        </div>
    )
};
export default CreateReview;