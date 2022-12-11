import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ReviewList from "../reviews/review-list";
import BusinessInfo from "./business-info";
import FeatureList from "./featured-items/featured-item-list";
import "../restaurant/restaurant.css";
import {findRestaurantByIdThunk} from "../../services/restaurants-thunks";
import UpdateList from "./restaurant-updates/update-list";

const BusinessProfile = () => {
    const {publicPage} = useSelector(state => state.restaurantsData);
    const {currentUser} = useSelector(state => state.usersData);
    // console.log(currentUser);
    const dispatch = useDispatch();

    let restId = currentUser.business;
    // console.log(restId);

    useEffect(   () => {
        dispatch(findRestaurantByIdThunk(restId))
    }, [restId, dispatch]);

    // console.log(publicPage);
    
    return (
    <div className="border ttr-border-radius">
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
                    <div className="row row-cols-12">
                        <div className="row col-10">
                            <span className="h5 fw-bolder">{publicPage.name} @{publicPage.handle}
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