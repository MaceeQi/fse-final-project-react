import React from "react";
// import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./business-home.css";
import BusinessInfo from "./business-info";
import BusinessPost from "./business-post";
import FeaturedItems from "./featured-items";

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
        posts: [
            {_id: "123", post: "Intro of new dishes"},
            {_id: "124", post: "Discount info"},
            {_id: "125", post: "Special events"},
            {_id: "126", post: "Temporary closed days"}
        ],
        featured: [
            {_id: "123", food: "Lobster Roll", price: "$20.00", photo: "lobster-roll.jpeg", popular: true},
            {_id: "124", food: "Clam Chowder", price: "$18.00", photo: "clam-chowder.jpeg", popular: true},
            {_id: "125", food: "Salad", price: "$8.00", photo: "salad.jpeg", popular: false},
            {_id: "126", food: "Lobster Pasta", price: "$20.00", photo: "pasta.jpeg", popular: false},
            {_id: "127", food: "Seafood Pizza", price: "$17.00", photo: "pizza.jpeg", popular: false},
        ]
    }
}) => {
    // const restaurant = useSelector(state => state.restaurant);

    return (
        <div className="border wd-border-radius">
            <div className="position-relative wd-banner d-flex justify-content-center">
                <img src={`/images/${restaurant.bannerPicture}`}
                     className="wd-border-radius wd-banner-width mt-3" height={200}/>
                <img className="wd-portrait position-absolute start-0 ms-5"
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
                <FeaturedItems restaurant={restaurant}/>
                <div className="d-flex flex-row mb-3 border wd-border-radius">
                    <h5>Professional Reviews</h5>
                </div>
            </div>
            {/*<pre>{JSON.stringify(restaurant, null, 2)}</pre>*/}
        </div>
    );
}
export default BusinessHome;