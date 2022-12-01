import React from "react";
import {deleteReviewThunk} from "../../services/reviews-thunks";
import {useDispatch} from "react-redux";

const ReviewItem = ({
                        review={
                            "_id": "1234",
                            "restaurantId": "123",
                            "criticId": "123",
                            "review": "Great restaurant!",
                            "time": "07/22/2018"
                        },
                        critic={
                            "_id": "123",
                            "type": "CRITIC",
                            "avatarIcon": "alice.jpg",
                            "userName": "Alice",
                            "handle": "alice"
                        }

}) => {
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
                         src={`/images/${critic.avatarIcon}`} alt="avatar"/>
                </div>
                <div className="col-10">
                    <div className="me-2">
                        <div>
                            <span className="text-black fw-bolder">{critic.userName} </span>
                            <i className="bi bi-patch-check-fill text-primary"> </i>
                            <span className="text-secondary">
                         @{critic.handle} · {review.time}
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