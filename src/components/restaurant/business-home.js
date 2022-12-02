import React, {useState, useEffect} from "react";
// import {useSelector} from "react-redux";
// import {Routes, Route, Router} from "react-router";
import "./restaurant.css";
import BusinessInfo from "./business-info";
import ReviewList from "../reviews/reivew-list";
import CreateReview from "../reviews/create-review";
import critics from "../data/critic-users.json";
import UpdateList from "./restaurant-updates/update-list";
import FeatureList from "./featured-items/featured-item-list";
// import users from "../data/average-users.json";
// import restaurants from "../data/restaurants.json";
import {useDispatch, useSelector} from "react-redux";
import {findRestaurantByIdThunk} from "../../services/restaurants-thunks";
import {useLocation} from "react-router-dom";
import RestaurantList from "./restaurant-search/restaurant-list";

// hardcode restaurant input, need to update later
const BusinessHome = () => {
    // const restaurant = useSelector(state => state.restaurant);

    // hardcode logged in user info, need to update later
    // critic user: will see the review textbox and submit button
    const loggedIn = critics[0];
    // average user: can only see the reviews list
    // const loggedIn = users[0];

    const {restaurants, loading} = useSelector(state => state.restaurantsData);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const restId = paths[paths.length-1];
    // console.log(restId);

    let [restaurant, setRestaurant] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findRestaurantByIdThunk(restId));
        setRestaurant(restaurants[0]);
    }, []);
    // console.log(restaurant);

    return (
        <div className="border ttr-border-radius">
            {
                loading &&
                <h5>
                    Loading...
                </h5>
            }
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
                <p className="mt-3 mb-3">{restaurant.bio}</p>
                <BusinessInfo restaurant={restaurant}/>
                <UpdateList restaurant={restaurant}/>
                {/*<FeatureList restaurant={restaurant}/>*/}
                <div className="mb-3 border ttr-border-radius">
                    <div className="m-2">
                        <h5 className="fw-bolder">Professional Reviews</h5>
                        {
                            loggedIn.type === "CRITIC" && <CreateReview restaurant={restaurant}
                                                                        critic={loggedIn}/>
                        }
                        <ReviewList restaurant={restaurant} critics={critics}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BusinessHome;