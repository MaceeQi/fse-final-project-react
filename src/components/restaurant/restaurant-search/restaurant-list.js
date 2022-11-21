import React from "react";
import RestaurantItem from "./restaurant-item";

const RestaurantList = ({restaurants = []}) => {
    return (
        <div className="list-group border-0 p-0 mt-4">
            {
                restaurants.map(restaurant =>
                                    <RestaurantItem key={restaurant._id}
                                                    restaurant={restaurant}/>)
            }
        </div>
    );
};
export default RestaurantList;