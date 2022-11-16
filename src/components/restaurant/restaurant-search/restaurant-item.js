import React from "react";
import "./index.css";

const RestaurantItem = ({
                            restaurant = {
                                _id: "123",
                                name: "Red Lobster",
                                handle: "@redlobster",
                                profilePicture: "redlobster-avatar.png",
                                bio: "The best red lobster. Come and taste!",
                                cuisine: "Seafood",
                                price: "$$",
                                address: "Silver Spring, MD",
                                hours: {
                                    monday: "11:00AM - 10:00 PM",
                                    tuesday: "11:00AM - 10:00 PM",
                                    wednesday: "Closed",
                                    thursday: "11:00AM - 10:00 PM",
                                    friday: "11:00AM - 10:00 PM",
                                    saturday: "11:00AM - 10:00 PM",
                                    sunday: "11:00AM - 10:00 PM"
                                },
                                phone: "617-234-5678",
                                website: "www.delicious.com"
                            }
                        }
) => {
    return (
        <div className="ttr-restaurant-post-border mb-3 p-3">
            <div className="d-flex">
                <div>
                    <img src={`/images/${restaurant.profilePicture}`}
                         className="ttr-square-avatar"/>
                </div>
                <div className="ms-3 me-1 w-50">
                    <span className="fw-bold">{restaurant.name}</span><br/>
                    {restaurant.handle}<br/>
                    <p className="mt-2 mb-0">
                        {restaurant.bio}
                    </p>
                </div>
                <div className="ms-3">
                    {restaurant.cuisine} | {restaurant.price}<br/>
                    {restaurant.address}<br/>
                    {restaurant.phone}<br/>
                    {restaurant.website}<br/>
                    {/*<span>*/}
                    {/*    Mon: {restaurant.hours.monday}<br/>*/}
                    {/*    Tues: {restaurant.hours.tuesday}<br/>*/}
                    {/*    Wed: {restaurant.hours.wednesday}<br/>*/}
                    {/*    Thurs: {restaurant.hours.thursday}<br/>*/}
                    {/*    Fri: {restaurant.hours.friday}<br/>*/}
                    {/*    Sat: {restaurant.hours.saturday}<br/>*/}
                    {/*    Sun: {restaurant.hours.sunday}<br/>*/}
                    {/*</span>*/}
                </div>
            </div>


        </div>
    );
};
export default RestaurantItem;