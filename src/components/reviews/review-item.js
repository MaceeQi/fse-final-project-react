import React from "react";
import {deleteReviewThunk} from "../../services/reviews-thunks";
import {useDispatch, useSelector} from "react-redux";
import UpdateReview from "./update-review";
import {useLocation} from "react-router-dom";

const ReviewItem = ({review}) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const isInProfile = paths[paths.length-1] === "business";

    const dispatch = useDispatch();
    const deleteReviewHandler = (reviewid) => {
        dispatch(deleteReviewThunk(reviewid));
    }
    const {currentUser} = useSelector(state => state.usersData);
    const loggedIn = currentUser;
    return (
        <li className="list-group-item">
            <div className="row row-cols-12 m-0 pt-2">
                <div className="col-2 d-flex justify-content-center">
                    {
                        (!review.critic.profilePhoto) &&
                        <img className="ttr-avatar"
                             alt="profilePhoto"
                             src={`/images/emptyAvatar.png`}/>
                    }
                    {
                        review.critic.profilePhoto && review.critic.profilePhoto.includes("http") &&
                        <img className="ttr-avatar"
                             src={review.critic.profilePhoto} alt="profilePhoto"/>
                    }
                    {
                        review.critic.profilePhoto && !review.critic.profilePhoto.includes("http") &&
                        <img className="ttr-avatar"
                             alt="profilePhoto"
                             src={`/images/${review.critic.profilePhoto}`}/>
                    }
                </div>
                <div className="col-10">
                    <div className="me-2">
                        <div>
                            {
                                loggedIn && loggedIn._id === review.critic._id &&
                                <i onClick={() => deleteReviewHandler(review._id)}
                                className="fas fa-remove fa-pull-right"/>
                            }
                            <span className="text-black fw-bolder">
                                {review.critic && review.critic.firstName} {review.critic && review.critic.lastName}
                            </span> <i className="bi bi-patch-check-fill text-primary"> </i>
                            <span className="text-secondary">
                                @{review.critic && review.critic.username} · {review.time.substring(0, review.time.indexOf("T"))}
                            </span>
                        </div>
                        <div>
                            <span>{review.review}</span>
                            {
                                !isInProfile && loggedIn && loggedIn._id === review.critic._id &&
                                <UpdateReview reviewid={review._id} review={review.review}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default ReviewItem;