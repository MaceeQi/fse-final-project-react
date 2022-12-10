import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import { updateRestaurant } from "./restaurants-reducer";
// import EditUpdate from "./restaurant-updates/edit-update";
import EditFeature from "./featured-items/edit-featured-item";
import "./restaurant.css";
import {updateRestaurantThunk} from "../../services/restaurants-thunks";
import EditUpdate from "./restaurant-updates/edit-update";

const EditRestaurant = () => {
    // need to update change publicPage to current user after implementing login signup
    const {publicPage} = useSelector(state => state.restaurantsData);
    let [edit, setEdit] = useState(publicPage)

    // console.log(publicPage);

    const dispatch = useDispatch();

    const saveClickHandler = () => {
        dispatch(updateRestaurantThunk(edit))
    }

    return(
      <div className="ttr-border p-3">
          <div>
              <Link to={`/profile/business`}
                    className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                  <i className="fa fa-close"></i>
              </Link>
              <Link to={`/profile/business`}
                    onClick={saveClickHandler}
                    className="btn btn-secondary rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2">
                    Save
              </Link>
              <h4 className="p-2 mb-0 pb-0 fw-bolder">Edit Restaurant</h4>
              <div className="position-relative ttr-mb7">
                  {
                      (!publicPage.bannerPicture) &&
                      <img className="ttr-edit-banner" alt="banner" height={200}
                           src={`/images/emptyBanner.jpeg`}/>
                  }
                  {
                      publicPage.bannerPicture && publicPage.bannerPicture.includes("http") &&
                      <img className="ttr-edit-banner" alt="banner" height={200}
                           src={publicPage.bannerPicture}/>
                  }
                  {
                      publicPage.bannerPicture && !publicPage.bannerPicture.includes("http") &&
                      <img className="ttr-edit-banner" alt="banner" height={200}
                           src={`/images/${publicPage.bannerPicture}`}/>
                  }
                <div className="position-absolute ttr-profile-nudge-up">
                    {
                        (!publicPage.profilePicture) &&
                        <img className="rounded-circle" width = {160} alt="profile"
                             src={`/images/emptyAvatar.png`}/>
                    }
                    {
                        publicPage.profilePicture && publicPage.profilePicture.includes("http") &&
                        <img className="rounded-circle" width = {160} alt="profile"
                             src={publicPage.profilePicture}/>
                    }
                    {
                        publicPage.profilePicture && !publicPage.profilePicture.includes("http") &&
                        <img className="rounded-circle" width = {160} alt="profile"
                             src={`/images/${publicPage.profilePicture}`}/>
                    }
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
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="restaurantProfileImage">Restaurant Profile Image</label>
                    <input type="url" placeholder="profile image url" title="profile image url"
                           id="restaurantProfileImage" className="p-0 form-control border-0"
                           onChange={(e) => {
                               setEdit({...edit, profilePicture: e.target.value})
                           }}
                           value={edit.profilePicture ? `${edit.profilePicture}` : ``}>
                    </input>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="restaurantBannerImage">Restaurant Banner Image</label>
                    <input type="url" placeholder="banner image url" title="banner image url"
                           id="restaurantBannerImage" className="p-0 form-control border-0"
                           onChange={(e) => {
                               setEdit({...edit, bannerPicture: e.target.value})
                           }}
                           value={edit.bannerPicture ? `${edit.bannerPicture}` : ``}>
                    </input>
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
                    <label className="fw-bolder" htmlFor="cuisine">Price</label>
                    <input id="price" placeholder="$$"
                           className="p-0 form-control border-0"
                           type="price"
                           onChange={(e) => {
                               setEdit({...edit, price: e.target.value})}}
                           value={edit.price}/>
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
            <EditUpdate restaurant={publicPage}/>

            {/* featured items */}
            <EditFeature restaurant={publicPage}/>
        </form>
      </div>
    );
};
export default EditRestaurant;