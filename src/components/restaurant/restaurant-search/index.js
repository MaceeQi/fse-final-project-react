import React, {useEffect, useState} from "react";
import "./index.css";
import RestaurantList from "./restaurant-list";
import {useDispatch, useSelector} from "react-redux";
import {
    findAllRestaurantsThunk,
    findRestaurantsByNameThunk
} from "../../../services/restaurants-thunks";

const RestaurantSearch = () => {
    const restaurants = useSelector(state => state.restaurants);
    const [restaurantName, setRestaurantName] = useState('')
    const dispatch = useDispatch();

    const searchChangeHandler = (event) => {
        const restaurant = event.target.value;
        setRestaurantName(restaurant);
    }

    const searchRestaurantClickHandler = () => {
        dispatch(findRestaurantsByNameThunk(restaurantName));
    }

    useEffect(() => {
        dispatch(findAllRestaurantsThunk())
    }, []);

    return (
        <div className="p-2">
            {/* search bar */}
            <div className="row">
                {/* input field */}
                <div className="w-100">
                    <div className="position-relative">
                        <input className="ps-5 bg-secondary bg-opacity-10 border-0 form-control
                                          form-control-lg rounded-pill"
                               placeholder="Search Restaurants"
                               type="text"
                               onChange={searchChangeHandler}
                               value={restaurantName}/>
                        <i className="position-absolute ttr-search bi bi-search"></i>
                        <button className="btn btn-primary position-absolute rounded-pill
                                           ttr-search-button ps-3 pe-3"
                                onClick={searchRestaurantClickHandler}>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Results - display list of restaurants */}
            <div>
                <RestaurantList restaurants={restaurants}/>
            </div>
        </div>
    );
};
export default RestaurantSearch;