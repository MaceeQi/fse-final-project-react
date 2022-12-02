import React, {useEffect} from "react";
import "./index.css";
import RestaurantList from "./restaurant-list";
import {useDispatch, useSelector} from "react-redux";
import {findAllRestaurantsThunk} from "../../../services/restaurants-thunks";
// import restaurants from "./restaurants.json";

const RestaurantSearch = () => {
    const {restaurants, loading} = useSelector(state => state.restaurantsData);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllRestaurantsThunk());
    }, [])
    // console.log(restaurants);

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
                {
                    loading &&
                    <h5>
                        Loading...
                    </h5>
                }
                {
                    <RestaurantList restaurants={restaurants}/>
                }
            </div>
        </div>
    );
};
export default RestaurantSearch;