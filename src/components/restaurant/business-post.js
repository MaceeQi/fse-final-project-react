import React from "react";
const BusinessPost = ({
                          restaurant = {
                              posts: [
                                  {_id: "123", post: "Intro of new dishes"},
                                  {_id: "124", post: "Discount info"},
                                  {_id: "125", post: "Special events"},
                                  {_id: "126", post: "Temporary closed days"}
                              ]}
                      }
) => {
    return (
        <div className="mb-3 border wd-border-radius">
            <div>
                <h5 className="m-2 fw-bolder">Updates</h5>
                <ul>
                    {
                        restaurant.posts.map(post =>
                                                 <li key={post._id} >
                                                     {post.post}
                                                 </li>
                        )
                    }
                </ul>

            </div>
        </div>
    );
}
export default BusinessPost;