import React from "react";

const BusinessInfo = ({
                          restaurant = {
                              cuisine: "Seafood",
                              price: "$$",
                              address: "Silver Spring, MD",
                              open: "11:00 AM - 10:00 PM",
                              close: "Wednesday",
                              phone: "617-234-5678",
                              website: "www.delicious.com",
                          }
                      }
) => {
    return (
        <div className="d-flex flex-row mb-3 border wd-border-radius">
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
                    {restaurant.website}
                </span>
                <br/>
                <span className="m-1">
                    <span className="fw-bolder">Open Hours: </span>
                    {restaurant.open}
                </span>
                <br/>
                <span className="m-1">
                    <span className="fw-bolder">Closed on: </span>
                    {restaurant.close}
                </span>
                <br/>
            </div>
        </div>
    );
}
export default BusinessInfo;