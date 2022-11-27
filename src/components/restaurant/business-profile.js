import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
// import restaurants from "../data/restaurants.json";
import critics from "../data/critic-users.json";
import ReviewList from "../reviews/reivew-list";
import BusinessInfo from "./business-info";
import UpdateList from "./restaurant-updates/update-list";
import FeatureList from "./featured-items/featured-item-list";
import "../restaurant/restaurant.css";

// hardcode restaurant input, need to change later
const BusinessProfile = () => {
    const restaurant = useSelector(state => state.restaurants);

    return (
    <div className="border ttr-border-radius">
        <div className="position-relative ttr-banner d-flex justify-content-center">
            <img src={`/images/${restaurant.bannerPicture}`}
                 alt="banner"
                 className="ttr-border-radius ttr-banner-width mt-3" height={200}/>
            <img className="ttr-portrait position-absolute start-0 ms-5"
                 alt="profile"
                 src={`/images/${restaurant.profilePicture}`}/>
        </div>
        <div className="m-3 position-relative">
                <span className="h5 fw-bolder">{restaurant.name} {restaurant.handle}
                </span><br/>
            {/*Profile edit button*/}
            <Link to="./edit">
                <button className="btn btn-white border rounded-pill fw-bolder
            float-end me-3 mt-2">Edit</button>
            </Link>
            <p className="mt-3 mb-3">{restaurant.bio}</p>
            <BusinessInfo restaurant={restaurant}/>
            <UpdateList restaurant={restaurant}/>
            <FeatureList restaurant={restaurant}/>
            <div className="mb-3 border ttr-border-radius">
                <div className="m-2">
                    <h5 className="fw-bolder">Professional Reviews</h5>
                    <ReviewList restaurant={restaurant} critics={critics}/>
                </div>
            </div>
        </div>
    </div>
    );
}
export default BusinessProfile;