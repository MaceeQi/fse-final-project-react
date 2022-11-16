import React from "react";
import {Link} from "react-router-dom";
import "./edit-restaurant.css";

const EditRestaurant = () => {
    return(
      <div className="ttr-edit-profile">
          <div className="border border-bottom-0">
              <Link to="/restaurant" className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                  <i className="fa fa-close"></i>
              </Link>
              <Link to="/restaurant" className="btn btn-secondary rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2">
                  Save
              </Link>
              <h4 className="p-2 mb-0 pb-0 fw-bolder">Edit Restaurant</h4>
              <div className="mb-5 position-relative">
                  <img className="w-100" src="../images/nasa-profile-header.jpg"/>
                  <div className="bottom-0 left-0 position-absolute">
                      <div className="position-relative">
                          <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                               src="../images/nasa-3.png"/>
                      </div>
                  </div>
              </div>
          </div>
          <form action="restaurant.html">
            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder p-2">Account Information</label>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="restaurantName">Restaurant Name</label>
                    <input id="restaurantName"
                            className="p-0 form-control border-0"
                            placeholder="Red Lobster"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="handle">Handle</label>
                    <input id="handle"
                            className="p-0 form-control border-0"
                            placeholder="redLobster"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="bio">Bio</label>
                    <textarea
                        className="p-0 form-control border-0"
                        id="bio"
                        placeholder="Introduce your restaurant!">
                    </textarea>
                </div>
            </div>

            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder p-2">Restaurant Information</label>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="cuisine">Cuisine Type</label>
                    <input id="cuisine" placeholder="Italian"
                            className="p-0 form-control border-0"
                            type="cuisine"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="address">Address</label>
                    <input id="address" placeholder="123 Main St, Boston, MA, 02115"
                            className="p-0 form-control border-0"
                            type="address"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="cuisine">Phone</label>
                    <input id="phone" placeholder="123-456-7890"
                            className="p-0 form-control border-0"
                            type="phone"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="website">Website</label>
                    <input id="website" placeholder="www.yourrestaurant.com"
                            className="p-0 form-control border-0"
                            type="website"/>
                            
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label className="fw-bolder" htmlFor="hours">Open Hours</label>
                    <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="p-0 form-control border-0"
                            type="hours"/>
                </div>
            </div>
            
            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder p-2">Updates</label>
                <div className="row pb-3">
                    <div className="col-11">
                        <textarea id="update" placeholder="New dish is out!"
                                className="form-control border-secondary"
                                type="update"/>
                    </div>
                    <i className="align-self-center col-1 fa fa-close"></i>
                </div>
                <div className="row pb-3">
                    <div className="col-11">
                        <textarea id="update" placeholder="We are closed today."
                                className="form-control border-secondary"
                                type="update"/>
                    </div>
                    <i className="align-self-center col-1 fa fa-close"></i>
                </div>
                <div className="row pb-3">
                    <div className="col-11">
                        <textarea id="update" placeholder="Special Event!"
                                className="form-control border-secondary"
                                type="update"/>
                    </div>
                    <i className="align-self-center col-1 fa fa-close"></i>
                </div>
                <div className="row justify-content-center">
                    <button className="col-2 btn btn-sm btn-secondary">Add Update</button>
                </div>
            </div>

            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder p-2">Featured Items</label>
                <div className="row justify-content-center">
                    <button className="col-3 btn btn-sm btn-secondary">Add Menu Item</button>
                </div>
            </div>
            </form></div>
    );
};
export default EditRestaurant;