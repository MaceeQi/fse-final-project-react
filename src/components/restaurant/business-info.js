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
        <div className="d-flex flex-row mb-3 border rounded-3">
            <div className="m-2">
                        <span className="m-1">
                            {restaurant.cuisine} | {restaurant.price}</span>
                <br/>
                <span className="m-1">
                            Address: {restaurant.address}</span>
                <br/>
                <span className="m-1">
                            Phone: {restaurant.phone}</span>
                <br/>
                <span className="m-1">
                            Website: {restaurant.website}</span>
                <br/>
                <span className="m-1">
                            Open Hours: {restaurant.open}</span>
                <br/>
                <span className="m-1">
                            Closed on: {restaurant.close}</span>
                <br/>
            </div>
        </div>
    );
}
export default BusinessInfo;