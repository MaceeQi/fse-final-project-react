import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createReviewThunk} from "../../services/reviews-thunks";

const CreateReview = ({restaurant, critic}) => {
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    const reviewSubmitHandler = () => {
        const newReview = {
            review,
            restaurantid: restaurant._id,
            // criticid: critic._id
            criticid: "6383e8fde3994dcd7623e825"
        }
        dispatch(createReviewThunk(newReview))
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