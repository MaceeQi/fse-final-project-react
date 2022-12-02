import React from "react";
import {deleteReviewThunk, updateReviewThunk} from "../../services/reviews-thunks";
import {useDispatch} from "react-redux";

const ReviewItem = ({review}) => {
    // const critics = allCritics.filter(critic => critic._id === review.criticId);
    const dispatch = useDispatch();
    const updateReviewHandler = (reviewid, review) => {
        dispatch(updateReviewThunk(reviewid, review));
    }
    const deleteReviewHandler = (reviewid) => {
        dispatch(deleteReviewThunk(reviewid));
    }
    return (
        <li className="list-group-item">
            <div className="row row-cols-12 m-0 pt-2">
                <div className="col-2 d-flex justify-content-center">
                    <img className="ttr-avatar"
                         src={`/images/${review.critic.profilePhoto}`} alt="avatar"/>
                </div>
                <div className="col-10">
                    <div className="me-2">
                        <div>
                            <i onClick={() => deleteReviewHandler(review._id)} className="fas fa-remove fa-pull-right"></i>
                            <span className="text-black fw-bolder">
                                {review.critic && review.critic.firstName} {review.critic && review.critic.lastName}
                            </span> <i className="bi bi-patch-check-fill text-primary"> </i>
                            <span className="text-secondary">
                                @{review.critic && review.critic.username} · {review.time.substring(0, review.time.indexOf("T"))}
                            </span>
                        </div>
                        <div>
                            <span>{review.review}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default ReviewItem;