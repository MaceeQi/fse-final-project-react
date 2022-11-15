import React from "react";
// import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./business-home.css";
import BusinessInfo from "./business-info";
import BusinessPost from "./business-post";

const BusinessHome = (
    {
        restaurant = {
            name: "Red Lobster",
            bannerPicture: "redlobster-banner.jpeg",
            profilePicture: "redlobster-avatar.png",
            handler: "@redlobster",
            bio: "The best red lobster. Come and taste!",
            cuisine: "Seafood",
            price: "$$",
            address: "Silver Spring, MD",
            open: "11:00 AM - 10:00 PM",
            close: "Wednesday",
            phone: "617-234-5678",
            website: "www.delicious.com",
            posts: ["Intro of new dishes", "Discount info", "Special events",
                    "Temporary closed days"]
        }
    }
) => {
    // const restaurant = useSelector(state => state.restaurant);

    return (
        <div className="border">
            <div className="position-relative wd-banner">
                <img src={`/images/${restaurant.bannerPicture}`}
                     className="w-100" height={200}/>
                <img className="wd-portrait position-absolute start-0 ms-3"
                     src={`/images/${restaurant.profilePicture}`}/>
            {/*    <Link to="../edit-restaurant"*/}
            {/*          className="btn btn-white border rounded-pill fw-bolder position-relative*/}
            {/*float-end me-3 mt-2">*/}
            {/*        Edit</Link>*/}
            </div>
            <div className="m-3 position-relative">
                <span className="h5 fw-bolder">{restaurant.name} {restaurant.handler}
                </span><br/>
                <p className="mt-3 mb-3">{restaurant.bio}</p>
                <BusinessInfo restaurant={restaurant}/>
                <BusinessPost restaurant={restaurant}/>
                <div className="d-flex flex-row mb-3 border rounded-3">
                    <h5>Featured Items</h5>
                </div>
                <div className="d-flex flex-row mb-3 border rounded-3">
                    <h5>Professional Reviews</h5>
                </div>
            </div>
            {/*<pre>{JSON.stringify(restaurant, null, 2)}</pre>*/}
        </div>
    );
}
export default BusinessHome;