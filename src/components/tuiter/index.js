import React from "react";
import Navigation from "../navigation";
import WhatsHappening from "../whats-happening";
import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "../home";
import Bookmarks from "../bookmarks";
import Profile from "../profile";
import './tuiter.css'
import EditProfile from "../profile/edit-profile";
import Explore from "../explore";
import Notifications from "../notifications";
import Messages from "../messages";
import Lists from "../lists";
import More from "../more";
import {Login} from "../profile/login";
import Movies from "../movies";
import MovieDetails from "../movies/details";
import BusinessHome from "../restaurant/business-home";
import EditRestaurant from "../restaurant/edit-restaurant";
import RestaurantSearch from "../restaurant/restaurant-search";
import reviewsReducer from "../reviews/review-reducer";
import updateReducer from "../restaurant/restaurant-updates/update-reducer";
import featuredReducer from "../restaurant/featured-items/featured-item-reducer";
import restaurantReducer from "../restaurant/restaurants-reducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import BusinessProfile from "../restaurant/business-profile";

// revised restaurants to restaurantsData for the new reducer with thunks
const store = configureStore({reducer: {
    reviews: reviewsReducer,
    // restaurants: restaurantReducer, changed the restaurants into restaurantsData below for
    // differentiation as this restaurantReducer were updated to take more variable fields - yutong
    restaurantsData: restaurantReducer,
    updates: updateReducer,
    features: featuredReducer
}});

function Tuiter () {
  return(
    <Provider store={store}>
      <HashRouter>
        <div className="container">
          <div className="ttr-tuiter">
            <div className="ttr-left-column">
              <Navigation/>
            </div>
            <div className="ttr-center-column">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tuiter" element={<Home/>}/>
                <Route path="/tuiter/:uid" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home/:uid" element={<Home/>}/>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/bookmarks" element={<Bookmarks/>}/>
                <Route path="/lists" element={<Lists/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile/edit" element={<EditProfile/>}/>
                {/*need to update the path below later, for testing only currently*/}
                <Route path="/profile/business/:rid" element={<BusinessProfile/>}/>
                <Route path="/profile/business/:rid/edit" element={<EditRestaurant/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/movies/:imdbID" element={<MovieDetails/>}/>
                <Route path="/restaurant" element={<RestaurantSearch/>}/>
                <Route path="/restaurant/:rid" element={<BusinessHome/>}/>
                <Route path="/more" element={<More/>}/>
              </Routes>
            </div>
            <div className="ttr-right-column">
              <WhatsHappening/>
            </div>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}
export default Tuiter;