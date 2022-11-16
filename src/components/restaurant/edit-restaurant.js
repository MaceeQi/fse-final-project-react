import React from "react";
import {Link} from "react-router-dom";
import "./edit-restaurant.css";

const EditRestaurant = () => {
    return(
      <div className="ttr-border p-3">
          <div>
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
                    <label className="fw-bolder" htmlFor="hours">Hours</label>
                    <div className="row">
                        <label className="col-3 align-self-center">Monday</label>
                        <div className="col-2">
                            <select className="form-control form-control-sm align-self-center">
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Tuesday</label>
                        <div className="col-2">
                            <select className="form-control form-control-sm align-self-center">
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Wednesday</label>
                        <div className="col-2">
                            <select className="form-control form-control-sm align-self-center">
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Thursday</label>
                        <div className="col-2">
                            <select className="form-control form-control-sm align-self-center">
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Friday</label>
                        <div className="col-2">
                            <select className="form-control form-control-sm align-self-center">
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Saturday</label>
                        <div className="col-2">
                            <select className="form-control form-control-sm align-self-center">
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"/>
                    </div>
                    <div className="row">
                        <label className="col-3 align-self-center">Sunday</label>
                        <div className="col-2">
                            <select className="form-control form-control-sm align-self-center">
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <input id="hours" placeholder="11:00 AM - 10:00 PM"
                            className="col-6 align-self-center p-1 border-0"
                            type="hours"/>
                    </div>
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
                    <div className="col-1 p-0 align-self-center ">
                        <i className="btn fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-11">
                        <textarea id="update" placeholder="We are closed today."
                                className="form-control border-secondary"
                                type="update"/>
                    </div>
                    <div className="col-1 p-0 align-self-center ">
                        <i className="btn fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-11">
                        <textarea id="update" placeholder="Special Event!"
                                className="form-control border-secondary"
                                type="update"/>
                    </div>
                    <div className="col-1 p-0 align-self-center ">
                        <i className="btn fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="col-3 btn btn-sm btn-secondary">Add Update</button>
                </div>
            </div>

            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder p-2">Featured Items</label>
                <div className="ttr-border row p-2 mb-3 m-1">
                    <div className="col-3 align-self-center">
                        <img className="w-100" src="../images/nasa-profile-header.jpg"/>
                    </div>
                    <div className="col-8">
                        <div>Menu Item Name:</div>
                        <input id="itemName" placeholder="Pasta"
                            className="p-0 form-control"/>
                        <div>Menu Item Price:</div>
                        <input id="itemPrice" placeholder="$15.00"
                            className="p-0 form-control"/>
                        <input id="popularItem" type="checkbox"
                            name="popularItem"/>
                        <label className="p-2" for="popularItem">Popular Item</label>
                    </div>
                    <div className="col-1 p-0 align-self-center ">
                        <i className="btn fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div className="ttr-border row p-2 mb-3 m-1">
                    <div className="col-3 align-self-center">
                        <img className="w-100" src="../images/nasa-profile-header.jpg"/>
                    </div>
                    <div className="col-8">
                        <div>Menu Item Name:</div>
                        <input id="itemName" placeholder="Pasta"
                            className="p-0 form-control"/>
                        <div>Menu Item Price:</div>
                        <input id="itemPrice" placeholder="$15.00"
                            className="p-0 form-control"/>
                        <input id="popularItem2" type="checkbox"
                            name="popularItem2"/>
                        <label className="p-2" for="popularItem2">Popular Item</label>
                    </div>
                    <div className="col-1 p-0 align-self-center ">
                        <i className="btn fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="col-3 btn btn-sm btn-secondary">Add Menu Item</button>
                </div>
            </div>
            </form></div>
    );
};
export default EditRestaurant;