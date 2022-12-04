import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateReviewThunk} from "../../services/reviews-thunks";

const UpdateReview = ({reviewid, review}) => {
    const [update, setUpdate] = useState(review)
    const dispatch = useDispatch()
    const updateSubmitHandler = () => {
        const newReview = {
            reviewid: reviewid,
            review: update
        }
        dispatch(updateReviewThunk(newReview))
    }

    return (
        <div className="mt-2 mb-2">
            <div className="row row-cols-12 mb-2 position-relative">
                <div className="col-10">
                    <textarea className="float-start w-100 border ttr-border-radius p-2"
                              placeholder="Update your review!"
                              onChange={(e) => {
                                  setUpdate(e.target.value)}
                                }
                              value={update}/>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <button
                        onClick={updateSubmitHandler}
                        className="btn btn-white btn-sm border
                rounded-pill fw-bolder position-relative float-end ps-2 pe-2">Submit</button>
                </div>
            </div>
        </div>
    )
};
export default UpdateReview;