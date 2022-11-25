import React from "react";

const BusinessInfo = ({
                          restaurant = {
                              cuisine: "Seafood",
                              price: "$$",
                              address: "Silver Spring, MD",
                              monday:"Open",
                              tuesday:"Open",
                              wednesday:"Open",
                              thursday:"Open",
                              friday:"Open",
                              saturday:"Open",
                              sunday:"Open",
                              phone: "617-234-5678",
                              website: "https://www.redlobster.com/?gclsrc=aw.ds&",
                          }
                      }
) => {
    return (
        <div className="mb-3 border ttr-border-radius">
            <div className="m-2">
                        <span className="m-1 fw-bolder">
                            {restaurant.cuisine} | {restaurant.price}
                        </span>
                <br/>
                <span className="m-1">
                    <span className="fw-bolder">Address: </span>
                    {restaurant.address}
                </span>
                <br/>
                <span className="m-1">
                    <span className="fw-bolder">Phone: </span>
                    {restaurant.phone}
                </span>
                <br/>
                <span className="m-1">
                    <span className="fw-bolder">Website: </span>
                    <a href={restaurant.website}>{restaurant.website}</a>
                </span>
                <br/>
                <div className="m-1">
                    <span className="fw-bolder">Hours: </span><br/>
                    <div className="row">
                        <span className="col-3">Monday</span>
                        <span className="col-5">{restaurant.monday}</span>
                    </div>
                    <div className="row">
                        <span className="col-3">Tuesday</span>
                        <span className="col-5">{restaurant.tuesday}</span>
                    </div>
                    <div className="row">
                        <span className="col-3">Wednesday</span>
                        <span className="col-5">{restaurant.wednesday}</span>
                    </div>
                    <div className="row">
                        <span className="col-3">Thursday</span>
                        <span className="col-5">{restaurant.thursday}</span>
                    </div>
                    <div className="row">
                        <span className="col-3">Friday</span>
                        <span className="col-5">{restaurant.friday}</span>
                    </div>
                    <div className="row">
                        <span className="col-3">Saturday</span>
                        <span className="col-5">{restaurant.saturday}</span>
                    </div>
                    <div className="row">
                        <span className="col-3">Sunday</span>
                        <span className="col-5">{restaurant.sunday}</span>
                    </div>
                    {/* {restaurant.hours.map(day =>
                        <div className="row">
                            <span className="col-3">{day.weekday}</span>
                            <span className="col-5">{day.open === "closed" ? "Closed": day.hour}</span>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}
export default BusinessInfo;