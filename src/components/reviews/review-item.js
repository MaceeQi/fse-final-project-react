import React from "react";
import {deleteReviewThunk} from "../../services/reviews-thunks";
import {useDispatch} from "react-redux";
import UpdateReview from "./update-review";

const ReviewItem = ({review}) => {
    // const critics = allCritics.filter(critic => critic._id === review.criticId);
    const dispatch = useDispatch();
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
                            <i onClick={() => deleteReviewHandler(review._id)} className="fas fa-remove fa-pull-right"/>
                            <span className="text-black fw-bolder">
                                {review.critic && review.critic.firstName} {review.critic && review.critic.lastName}
                            </span> <i className="bi bi-patch-check-fill text-primary"> </i>
                            <span className="text-secondary">
                                @{review.critic && review.critic.username} · {review.time.substring(0, review.time.indexOf("T"))}
                            </span>
                        </div>
                        <div>
                            <i id="edit" className="fa fa-edit fa-pull-right"/>
                            <span>{review.review}</span>
                            <UpdateReview reviewid={review._id} review={review.review}/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default ReviewItem;