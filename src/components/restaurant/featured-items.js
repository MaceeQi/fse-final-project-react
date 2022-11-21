import React from "react";

const FeaturedItems = ({
      restaurant = {
          featured: [
              {_id: "123", food: "Lobster Roll", price: "$20.00", photo: "lobster-roll.jpeg", popular: true},
              {_id: "124", food: "Clam Chowder", price: "$18.00", photo: "clam-chowder.jpeg", popular: true},
              {_id: "125", food: "Salad", price: "$8.00", photo: "salad.jpeg", popular: false},
              {_id: "126", food: "Lobster Pasta", price: "$20.00", photo: "pasta.jpeg", popular: false},
              {_id: "127", food: "Seafood Pizza", price: "$17.00", photo: "pizza.jpeg", popular: false},
          ]}
    }
) => {
    return (
        <div className="mb-3 border ttr-border-radius">
            <h5 className="m-2 fw-bolder">Featured Items</h5>
            <div className="ttr-scroll-menu m-2">
                <div className="row flex-row flex-nowrap">
                {
                    restaurant.featured.map(item =>
                         <div className="card ttr-card-block border" key={item._id}>
                             <div className="position-relative">
                                 <img className="card-img-top ttr-card-photo mt-2 mb-1"
                                      src={`/images/${item.photo}`}
                                      alt="food image"/>
                                 {
                                     item.popular &&
                                     <i className="fa-solid fa-award ttr-popular position-absolute">

                                     </i>
                                 }
                             </div>

                             <div className="ttr-card-text">{item.food}</div>
                             <div className="ttr-card-text">{item.price}</div>
                         </div>
                    )
                }
                </div>
            </div>
        </div>
    );
}
export default FeaturedItems;