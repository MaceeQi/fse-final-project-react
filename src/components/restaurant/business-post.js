import React from "react";
const BusinessPost = ({
                          restaurant = {
                              posts: ["Intro of new dishes", "Discount info", "Special events",
                                      "Temporary closed days"]
                          }
                      }
) => {
    return (
        <div className="d-flex flex-row mb-3 border rounded-3">
            <div>
                <h5 className="m-2">What's New</h5>
                <ul>
                    {
                        restaurant.posts.map(post =>
                                                 <li>{post}</li>
                        )
                    }
                </ul>

            </div>
        </div>
    );
}
export default BusinessPost;