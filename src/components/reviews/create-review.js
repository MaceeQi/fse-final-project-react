import React, {useState} from "react";
import * as service from "../../services/reviews-service";
import Tuit from "../tuits/tuit";

const CreateReview = () => {
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
            <div className="row row-cols-12 mb-2">
                <div className="col-10 justify-content-start">
                    <input placeholder={"Input review here"}
                           onChange={reviewChangeHandler}
                           value={review.review}/>
                </div>
                <div className="col-2">
                    <button
                        // onClick={AddReview}
                        className="btn btn-white btn-sm border
                rounded-pill fw-bolder position-relative float-end ps-2 pe-2">Submit</button>

                </div>
            </div>

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
};
export default CreateReview;