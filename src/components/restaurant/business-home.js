import React, {useState, useEffect} from "react";
// import {useSelector} from "react-redux";
// import {Routes, Route, Router} from "react-router";
import "./restaurant.css";
import BusinessInfo from "./business-info";
import ReviewList from "../reviews/review-list";
import CreateReview from "../reviews/create-review";
// import critics from "../data/critic-users.json";
import UpdateList from "./restaurant-updates/update-list";
import FeatureList from "./featured-items/featured-item-list";
// import users from "../data/average-users.json";
// import restaurants from "../data/restaurants.json";
import {useDispatch, useSelector} from "react-redux";
import {findRestaurantByIdThunk} from "../../services/restaurants-thunks";
import {useLocation} from "react-router-dom";
// import RestaurantList from "./restaurant-search/restaurant-list";

const BusinessHome = () => {
    const {currentUser} = useSelector(state => state.usersData);

    // critic user: will see the review textbox and submit button
    // average user: can only see the reviews list
    const loggedIn = currentUser;
    // console.log(loggedIn);

    const {publicPage, loading} = useSelector(state => state.restaurantsData);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const restId = paths[paths.length-1];
    // console.log(restId);

    const dispatch = useDispatch();

    useEffect(() => {
        if (restId) {
            dispatch(findRestaurantByIdThunk(restId));
        }
    }, [restId]);

    return (
        <div className="border ttr-border-radius">
            {
                loading &&
                <h5>
                    Loading...
                </h5>
            }
            {
                publicPage &&
                <>
                    <div className="position-relative ttr-banner d-flex justify-content-center">
                        {/*Banner Picture*/}
                        {
                            (!publicPage.bannerPicture) &&
                            <img className="ttr-border-radius ttr-banner-width mt-3" height={200} alt="banner"
                                 src={`/images/emptyBanner.jpeg`}/>
                        }
                        {
                            publicPage.bannerPicture && publicPage.bannerPicture.includes("http") &&
                            <img className="ttr-border-radius ttr-banner-width mt-3" height={200} alt="banner"
                                 src={publicPage.bannerPicture}/>
                        }
                        {
                            publicPage.bannerPicture && !publicPage.bannerPicture.includes("http") &&
                            <img className="ttr-border-radius ttr-banner-width mt-3" height={200} alt="banner"
                                 src={`/images/${publicPage.bannerPicture}`}/>
                        }

                        {/*Profile Picture*/}
                        {
                            (!publicPage.profilePicture) &&
                            <img className="ttr-portrait position-absolute start-0 ms-5
                        rounded-circle" width = {160} alt="profile"
                                 src={`/images/emptyAvatar.png`}/>
                        }
                        {
                            publicPage.profilePicture && publicPage.profilePicture.includes("http") &&
                            <img className="ttr-portrait position-absolute start-0 ms-5
                        rounded-circle" width = {160} alt="profile"
                                 src={publicPage.profilePicture}/>
                        }
                        {
                            publicPage.profilePicture && !publicPage.profilePicture.includes("http") &&
                            <img className="ttr-portrait position-absolute start-0 ms-5
                        rounded-circle" width = {160} alt="profile"
                                 src={`/images/${publicPage.profilePicture}`}/>
                        }
                    </div>
                    <div className="m-3 position-relative">
                <span className="h5 fw-bolder">{publicPage.name} @{publicPage.handle}
                </span><br/>
                        <p className="mt-3 mb-3">{publicPage.bio}</p>
                        <BusinessInfo restaurant={publicPage}/>
                        <UpdateList restaurant={publicPage}/>
                        <FeatureList restaurant={publicPage}/>
                        <div className="mb-3 border ttr-border-radius">
                            <div className="m-2">
                                <h5 className="fw-bolder">Professional Reviews</h5>
                                {
                                    loggedIn &&
                                    loggedIn.type === "CRITIC" && <CreateReview restaurant={publicPage}
                                                                                critic={loggedIn}/>
                                }
                                <ReviewList restaurant={publicPage}/>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}
export default BusinessHome;