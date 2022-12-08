import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
// import restaurants from "../data/restaurants.json";
import critics from "../data/critic-users.json";
import ReviewList from "../reviews/review-list";
import BusinessInfo from "./business-info";
// import UpdateList from "./restaurant-updates/update-list";
import FeatureList from "./featured-items/featured-item-list";
import "../restaurant/restaurant.css";
import {findRestaurantByIdThunk} from "../../services/restaurants-thunks";
import UpdateList from "./restaurant-updates/update-list";

const BusinessProfile = () => {
    const {publicPage} = useSelector(state => state.restaurantsData);
    const {currentUser} = useSelector(state => state.usersData);

    const dispatch = useDispatch();

    let restId = currentUser.business;
    // console.log(restId);

    useEffect(   () => {
        dispatch(findRestaurantByIdThunk(restId))
    }, []);

    return (
    <div className="border ttr-border-radius">
        {
            publicPage &&
            <>
                <div className="position-relative ttr-banner d-flex justify-content-center">
                    <img src={`/images/${publicPage.bannerPicture}`}
                         alt="banner"
                         className="ttr-border-radius ttr-banner-width mt-3" height={200}/>
                    <img className="ttr-portrait position-absolute start-0 ms-5"
                         alt="profile"
                         src={`/images/${publicPage.profilePicture}`}/>
                </div>
                <div className="m-3 position-relative">
                    <div className="row row-cols-12">
                        <div className="row col-10">
                            <span className="h5 fw-bolder">{publicPage.name} {publicPage.handle}
                            </span>
                        </div>
                        <div className="row col-2">
                            {/*Profile edit button*/}
                            <Link to="./edit">
                                <button className="btn btn-white border rounded-pill fw-bolder
            float-end">Edit
                                </button>
                            </Link>
                        </div>
                    </div>
                    <p className="mt-3 mb-3">{publicPage.bio}</p>
                    <BusinessInfo restaurant={publicPage}/>
                    <UpdateList restaurant={publicPage}/>
                    <FeatureList restaurant={publicPage}/>
                    <div className="mb-3 border ttr-border-radius">
                        <div className="m-2">
                            <h5 className="fw-bolder">Professional Reviews</h5>
                            <ReviewList restaurant={publicPage}/>
                        </div>
                    </div>
                </div>
            </>
        }
    </div>
    );
}
export default BusinessProfile;