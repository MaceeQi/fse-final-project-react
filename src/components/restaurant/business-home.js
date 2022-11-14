import React from "react";
// import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./business-home.css";

const BusinessHome = (
    {
        restaurant = {
            name: "Red Lobster",
            bannerPicture: "nasa-profile-header.jpg",
            profilePicture: "NASA.jpg",
            handler: "redlobster",
            bio: "The best red lobster. Come and taste!",
            cuisine: "Seafood",
            price: "$$",
            address: "Silver Spring, MD",
            open: "11:00 AM - 10:00 PM",
            close: "Wednesday",
            phone: "617-234-5678",
            posts: ["Intro of new dishes", "Discount info", "Special events",
                    "Temporary closed days"]
        }
    }
) => {
    // const restaurant = useSelector(state => state.restaurant);

    return (
        <div className="border border-light">
            <div className="row row-cols-12 mt-2 mb-2">
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-left-short wd-icon-large"> </i>
                </div>
                <div className="col-10">
                    <span className="h4">{restaurant.name} {restaurant.handler}</span>
                    <br/>
                    <span className="text-secondary">
                        {restaurant.bio}</span>
                </div>
            </div>
            <div className="position-relative wd-banner">
                <img src={`/images/${restaurant.bannerPicture}`}
                     className="w-100" height={200}/>
                <img className="wd-portrait position-absolute start-0 ms-3"
                     src={`/images/${restaurant.profilePicture}`}/>
                <Link to="../edit-restaurant"
                      className="btn btn-white border rounded-pill fw-bolder position-relative
            float-end me-3 mt-2">
                    Edit Profile</Link>
            </div>
            <div className="m-3 position-relative">
                <span className="h5 fw-bolder">{restaurant.name} {restaurant.handler}
                </span><br/>
                <p className="mt-3 mb-3">{restaurant.bio}</p>
                <div className="d-flex flex-row mb-3">
                    <div>
                        <i className="bi bi-geo-alt me-1"> </i>
                        <span className="text-secondary me-3">{restaurant.location}</span>
                    </div>
                    <div>
                        <i className="bi bi-balloon me-1"> </i>
                        <span className="text-secondary me-3">
                        Featured Items</span>
                    </div>
                    <div>
                        <i className="bi bi-calendar3 me-1"> </i>
                        <span className="text-secondary"> </span>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <h2>Professional Reviews</h2>
                </div>
            </div>
            {/*<pre>{JSON.stringify(restaurant, null, 2)}</pre>*/}
        </div>
    );
}
export default BusinessHome;