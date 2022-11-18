import React from "react";
import * as service from "../../services/reviews-service";
import reviews from "./sample-reviews.json";
import ReviewItem from "./review-item";
import "./reviews.css";

const ReviewList = ({restaurant, critics}) => {
    return (
        // <div className="mb-3 border ttr-border-radius">
        //     <div className="m-2">
        //         <div className="row row-cols-12 mb-2">
        //             <div className="col-10 justify-content-start">
        //                 <h5 className="fw-bolder float-start">Professional Reviews</h5>
        //             </div>
        //             <div className="col-2">
        //                 {
        //                     loggedIn.type === "CRITIC" &&
        //                     <button
        //                         // onClick={AddReview}
        //                         className="btn btn-white btn-sm border
        //             rounded-pill fw-bolder position-relative float-end ps-2 pe-2">Review</button>
        //                 }
        //             </div>
        //         </div>
                <div className="list-group ttr-border-radius">
                    {
                        reviews.filter(review => review.restaurantId === restaurant._id)
                            .map(review =>
                                     <ReviewItem
                                         key={review._id}
                                         review={review}
                                         critic={critics
                                             .filter(critic =>
                                                         critic._id === review.criticId)[0]}/>
                                )
                    }
                </div>
        //     </div>
        // </div>
    )
};
export default ReviewList;