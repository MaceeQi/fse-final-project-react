import React from "react";
import "./index.css";

const RestaurantItem = ({
                            restaurant = {
                                _id: "123",
                                name: "Red Lobster",
                                handle: "@redlobster",
                                bio: "The best red lobster. Come and taste!",
                                cuisine: "Seafood",
                                price: "$$",
                                address: "Silver Spring, MD",
                                open: {
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
            {restaurant.name}
        </div>
    );
};
export default RestaurantItem;