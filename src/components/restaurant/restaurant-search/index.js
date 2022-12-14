import React, {useEffect, useState} from "react";
import "./index.css";
import RestaurantList from "./restaurant-list";
import {useDispatch, useSelector} from "react-redux";
import {
    findAllRestaurantsThunk,
    findRestaurantsByNameThunk
} from "../../../services/restaurants-thunks";

const RestaurantSearch = () => {
    const {restaurants, loading} = useSelector(state => state.restaurantsData);
    const [restaurantName, setRestaurantName] = useState('')
    const dispatch = useDispatch();

    const searchChangeHandler = (event) => {
        const restaurant = event.target.value;
        setRestaurantName(restaurant);
    }

    const searchRestaurantClickHandler = () => {
        const noSpaces = restaurantName.replace(/\s/g, '');
        if (noSpaces === "") {
            alert("Must be valid search input - cannot be empty or blank")
        } else {
            dispatch(findRestaurantsByNameThunk(restaurantName));
        }
    }

    useEffect(() => {
        dispatch(findAllRestaurantsThunk())
    }, [dispatch]);

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