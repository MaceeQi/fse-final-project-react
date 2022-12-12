import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const RestaurantItem = ({
                            restaurant = {
                                _id: "123",
                                name: "Red Lobster",
                                handle: "@redlobster",
                                profilePicture: "redlobster-avatar.png",
                                bannerPicture: 'redlobster-banner.jpeg',
                                bio: "The best red lobster. Come and taste!",
                                cuisine: "Seafood",
                                price: "$$",
                                address: "Silver Spring, MD",
                                phone: "617-234-5678",
                                website: "www.delicious.com"
                            }
                        }
) => {

    return (
        <div className="mb-3">
            <Link to={`/restaurant/${restaurant._id}`} className="ttr-remove-decoration">
                <div className="ttr-restaurant-post-border p-3 ttr-remove-decoration">
                    <div className="d-flex">
                        <div>
                            {
                                (!restaurant.profilePicture) &&
                                <img className="ttr-square-avatar" alt="profilePicture"
                                     src={`/images/emptyAvatar.png`}/>
                            }
                            {
                                restaurant.profilePicture && restaurant.profilePicture.includes("http") &&
                                <img className="ttr-square-avatar" alt="profilePicture"
                                     src={restaurant.profilePicture}/>
                            }
                            {
                                restaurant.profilePicture && !restaurant.profilePicture.includes("http") &&
                                <img className="ttr-square-avatar" alt="profilePicture"
                                     src={`/images/${restaurant.profilePicture}`}/>
                            }
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
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default RestaurantItem;