import React, {useEffect} from "react";
import "./index.css";
import RestaurantList from "./restaurant-list";
import {useDispatch, useSelector} from "react-redux";
import {findAllRestaurantsThunk} from "../../../services/restaurants-thunks";

const RestaurantSearch = () => {
    const restaurants = useSelector(state => state.restaurants);
    const dispatch = useDispatch();

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
                               placeholder="Search Restaurants"/>
                        <i className="position-absolute ttr-search bi bi-search"></i>
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