import React, {useState} from "react";
import * as service from "../../services/reviews-service";
// import {createReview} from "./review-reducer";
import {useDispatch} from "react-redux";
import {createReviewThunk} from "../../services/reviews-thunks";

const CreateReview = ({restaurant, critic}) => {
    const [review, setReview] = useState('');
    const reviewChangeHandler = (event) => {
        setReview(event.target.value);
    }
    const dispatch = useDispatch();
    const reviewSubmitHandler = () => {
        // const newReview = {
        //     review: review,
        //     restaurantId: restaurant._id,
        //     criticId: critic._id
        // }
        dispatch(createReviewThunk(restaurant._id, critic._id, review));
    }

    return (
        <div className="mt-2 mb-2">
            <div className="row row-cols-12 mb-2 position-relative">
                <div className="col-10">
                    <textarea className="float-start w-100 border ttr-border-radius p-2"
                              placeholder="Write down your reviews!"
                              onChange={reviewChangeHandler}
                              value={review}/>
                </div>
                <div className="col-2 d-flex align-items-center">
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