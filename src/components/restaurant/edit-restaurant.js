import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { updateRestaurant } from "./restaurants-reducer";
import EditUpdate from "./restaurant-updates/edit-update";
import EditFeature from "./featured-items/edit-featured-item";
import "./restaurant.css";

const EditRestaurant = () => {
    const restaurant = useSelector(state => state.restaurants);
    let [edit, setEdit] = useState(restaurant)

    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dispatch(updateRestaurant(edit));
    }

    return(
      <div className="ttr-border p-3">
          <div>
              <Link to="/profile/business/:rid" className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                  <i className="fa fa-close"></i>
              </Link>
              <Link to="/profile/business/:rid" 
                    onClick={saveClickHandler}
                    className="btn btn-secondary rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2">
                    Save
              </Link>
              <h4 className="p-2 mb-0 pb-0 fw-bolder">Edit Restaurant</h4>
              <div className="position-relative ttr-mb7">
                <img className="ttr-edit-banner" alt="banner"
                    src={`../images/${restaurant.bannerPicture}`}/>
                <div className="position-absolute ttr-profile-nudge-up">
                    <img className="rounded-circle" width = {160} alt="profile"
                        src={`../images/${restaurant.profilePicture}`}/>
                </div>
              </div>
          </div>

          {/* Restaurant Information */}
          <form>
            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder p-2">Account Information</label>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="restaurantName">Restaurant Name</label>
                    <input id="restaurantName"
                            className="p-0 form-control border-0"
                            placeholder="Red Lobster"
                            onChange={(e) => {
                                setEdit({...edit, name: e.target.value})
                            }}
                            value={edit.name}/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="handle">Handle</label>
                    <input id="handle"
                            className="p-0 form-control border-0"
                            placeholder="redLobster"
                            onChange={(e) => {
                                setEdit({...edit, handle: e.target.value})
                            }}
                            value={edit.handle}/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="bio">Bio</label>
                    <textarea
                        className="p-0 form-control border-0"
                        id="bio"
                        placeholder="Introduce your restaurant!"
                        onChange={(e) => {
                            setEdit({...edit, bio: e.target.value})}}
                            value={edit.bio}>
                    </textarea>
                </div>
            </div>
            
            {/* hours */}
            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder p-2">Restaurant Information</label>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="cuisine">Cuisine Type</label>
                    <input id="cuisine" placeholder="Italian"
                            className="p-0 form-control border-0"
                            type="cuisine"
                            onChange={(e) => {
                                setEdit({...edit, cuisine: e.target.value})}}
                                value={edit.cuisine}/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="address">Address</label>
                    <input id="address" placeholder="123 Main St, Boston, MA, 02115"
                            className="p-0 form-control border-0"
                            type="address"
                            onChange={(e) => {
                                setEdit({...edit, address: e.target.value})}}
                                value={edit.address}/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="cuisine">Phone</label>
                    <input id="phone" placeholder="123-456-7890"
                            className="p-0 form-control border-0"
                            type="phone"
                            onChange={(e) => {
                                setEdit({...edit, phone: e.target.value})}}
                                value={edit.phone}/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="website">Website</label>
                    <input id="website" placeholder="www.yourrestaurant.com"
                            className="p-0 form-control border-0"
                            type="website"
                            onChange={(e) => {
                                setEdit({...edit, website: e.target.value})}}
                                value={edit.website}/>
                            
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="hours">Hours</label>
                    <div className="row">
                        <label className="col-3 align-self-center">Monday</label>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"
                            onChange={(e) => {
                                setEdit({...edit, monday: e.target.value})}}
                                value={edit.monday}/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Tuesday</label>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"
                            onChange={(e) => {
                                setEdit({...edit, tuesday: e.target.value})}}
                                value={edit.tuesday}/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Wednesday</label>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"
                            onChange={(e) => {
                                setEdit({...edit, wednesday: e.target.value})}}
                                value={edit.wednesday}/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Thursday</label>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"
                            onChange={(e) => {
                                setEdit({...edit, thursday: e.target.value})}}
                                value={edit.thursday}/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Friday</label>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"
                            onChange={(e) => {
                                setEdit({...edit, friday: e.target.value})}}
                                value={edit.friday}/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Saturday</label>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"
                            onChange={(e) => {
                                setEdit({...edit, saturday: e.target.value})}}
                                value={edit.saturday}/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Sunday</label>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"
                            onChange={(e) => {
                                setEdit({...edit, sunday: e.target.value})}}
                                value={edit.sunday}/>
                    </div>
                </div>
            </div>

            {/* Updates */}
            <EditUpdate restaurant={restaurant}/>

            {/* featured items */}
            <EditFeature restaurant={restaurant}/>
        </form></div>
    );
};
export default EditRestaurant;