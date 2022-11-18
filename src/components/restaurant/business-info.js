import React from "react";

const BusinessInfo = ({
                          restaurant = {
                              cuisine: "Seafood",
                              price: "$$",
                              address: "Silver Spring, MD",
                              hours: [
                                  {_id: "123", weekday: "Monday", hour: "11:00 AM - 10:00 PM"},
                                  {_id: "124", weekday: "Tuesday", hour: "11:00 AM - 10:00 PM"},
                                  {_id: "125", weekday: "Wednesday", hour: "11:00 AM - 10:00 PM"},
                                  {_id: "126", weekday: "Thursday", hour: "11:00 AM - 10:00 PM"},
                                  {_id: "127", weekday: "Friday", hour: "11:00 AM - 10:00 PM"},
                                  {_id: "128", weekday: "Saturday", hour: "11:00 AM - 10:00 PM"},
                                  {_id: "129", weekday: "Sunday", hour: "11:00 AM - 10:00 PM"}
                              ],
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
                        {restaurant.hours.map(day =>
                            <div key={day._id} className="row row-cols-7">
                                <span className="col-2">{day.weekday}</span>
                                <span className="col-5">{day.hour}</span>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}
export default BusinessInfo;