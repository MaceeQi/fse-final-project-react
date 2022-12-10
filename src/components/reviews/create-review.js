import React, {useState} from "react";
// import {createReview} from "./review-reducer";
import {useDispatch} from "react-redux";
import {createReviewThunk, findAllReviewsForRestaurantThunk} from "../../services/reviews-thunks";

let reviewCreated = 0

const CreateReview = ({restaurant, critic}) => {
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    const reviewSubmitHandler = () => {
        const newReview = {
            review,
            restaurantid: restaurant._id,
            criticid: critic._id
        }
        dispatch(createReviewThunk(newReview))
            .then(dispatch(findAllReviewsForRestaurantThunk(restaurant._id)));
        reviewCreated += 1
    }

    return (
        <div className="mt-2 mb-2">
            <div className="row row-cols-12 mb-2 position-relative">
                <div className="col-10">
                    <textarea className="float-start w-100 border ttr-border-radius p-2"
                              placeholder="Write down your review!"
                              onChange={
                                    (e) => setReview(e.target.value)
                              }
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
export {reviewCreated};