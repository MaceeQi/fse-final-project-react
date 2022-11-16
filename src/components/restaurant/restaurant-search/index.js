import React from "react";
import "./index.css";

const RestaurantSearch = () => {
    return (
        <div >
            {/* search bar */}
            <div className="row mt-2">
                {/* input field */}
                <div className="ttr-width-90">
                    <div className="position-relative">
                        <input className="ps-5 bg-secondary bg-opacity-10 border-0 form-control
                                          form-control-lg rounded-pill"
                               placeholder="Search Restaurants"/>
                        <i className="position-absolute ttr-search bi bi-search"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RestaurantSearch;