import React from "react";
// import {useSelector} from "react-redux";
import {Routes, Route, Router} from "react-router";
import "./business-home.css";
import BusinessInfo from "./business-info";
import BusinessPost from "./business-post";
import FeaturedItems from "./featured-items";
import ReviewList from "../reviews/reivew-list";
import CreateReview from "../reviews/create-review";
import critics from "../data/critic-users.json";

const BusinessHome = (
{
    restaurant = {
        _id: "123",
        name: "Red Lobster",
        bannerPicture: "redlobster-banner.jpeg",
        profilePicture: "redlobster-avatar.png",
        handle: "@redlobster",
        bio: "The best red lobster. Come and taste!",
        cuisine: "Seafood",
        price: "$$",
        address: "Silver Spring, MD",
        hours: [
            {_id: "123", weekday: "Monday", hour: "11:00 AM - 10:00 PM"},
            {_id: "124", weekday: "Tuesday", hour: "11:00 AM - 10:00 PM"},
            {_id: "125", weekday: "Wednesday", hour: "11:00 AM - 10:00 PM"},
            {_id: "126", weekday: "Thursday", hour: "11:00 AM - 10:00 PM"},
            {_id: "127", weekday: "Friday", hour: "11:00 AM - 10:00 PM"},
            {_id: "128", weekday: "Saturday", hour: "11:00 AM - 10:00 PM"},
            {_id: "129", weekday: "Sunday", hour: "11:00 AM - 10:00 PM"}
        ],
        phone: "617-234-5678",
        website: "https://www.redlobster.com/?gclsrc=aw.ds&",
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


    // hardcode logged in user info, needs to update later
    const loggedIn = critics[0];

    return (
        <div className="border ttr-border-radius">
            <div className="position-relative ttr-banner d-flex justify-content-center">
                <img src={`/images/${restaurant.bannerPicture}`}
                     className="ttr-border-radius ttr-banner-width mt-3" height={200}/>
                <img className="ttr-portrait position-absolute start-0 ms-5"
                     src={`/images/${restaurant.profilePicture}`}/>
            {/*    <Link to="../edit-restaurant"*/}
            {/*          className="btn btn-white border rounded-pill fw-bolder position-relative*/}
            {/*float-end me-3 mt-2">*/}
            {/*        Edit</Link>*/}
            </div>
            <div className="m-3 position-relative">
                <span className="h5 fw-bolder">{restaurant.name} {restaurant.handle}
                </span><br/>
                <p className="mt-3 mb-3">{restaurant.bio}</p>
                <BusinessInfo restaurant={restaurant}/>
                <BusinessPost restaurant={restaurant}/>
                <FeaturedItems restaurant={restaurant}/>
                {/*<Router>*/}
                {/*    <Routes>*/}
                {/*        <Route path="/*" element={<ReviewList restaurant={restaurant}/>}/>*/}
                {/*        <Route path="/:cid/reviews" element={<CreateReview/>}/>*/}
                {/*    </Routes>*/}
                {/*</Router>*/}
                <div className="mb-3 border ttr-border-radius">
                    <div className="m-2">
                        <h5 className="fw-bolder float-start">Professional Reviews</h5>
                        <br/>
                    {/*    <div className="row row-cols-12 mb-2">*/}
                    {/*        <div className="col-10 justify-content-start">*/}
                    {/*            <h5 className="fw-bolder float-start">Professional Reviews</h5>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-2">*/}
                    {/*            {*/}
                    {/*                loggedIn.type === "CRITIC" &&*/}
                    {/*                <button*/}
                    {/*                    // onClick={AddReview}*/}
                    {/*                    className="btn btn-white btn-sm border*/}
                    {/*rounded-pill fw-bolder position-relative float-end ps-2 pe-2">Submit</button>*/}
                    {/*            }*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                        {
                            loggedIn.type === "CRITIC" && <CreateReview/>
                        }
                        <ReviewList restaurant={restaurant} critics={critics}/>
                    </div>
                </div>
            </div>
            {/*<pre>{JSON.stringify(restaurant, null, 2)}</pre>*/}
        </div>
    );
}
export default BusinessHome;