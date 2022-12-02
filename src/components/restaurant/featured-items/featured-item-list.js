import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findFeaturedItemsByRestaurantThunk} from "../../../services/featured-item-thunks";

const FeatureList = ({restaurant}) => {
    const features = useSelector(state => state.features);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFeaturedItemsByRestaurantThunk(restaurant._id));
    }, [])

    return (
        <div className="mb-3 border ttr-border-radius">
            <h5 className="m-2 fw-bolder">Featured Items</h5>
            <div className="ttr-scroll-menu m-2">
                <div className="row flex-row flex-nowrap">
                {
                    features.filter(feature => feature.restaurant === restaurant._id)
                        .map(feature =>
                         <div className="card ttr-card-block border" key={feature._id}>
                             <div className="position-relative">
                                 <img className="card-img-top ttr-card-photo mt-2 mb-1"
                                      src={`/images/${feature.photo}`}
                                      alt="food"/>
                                 {
                                     feature.popular &&
                                     <i className="fa-solid fa-award ttr-popular position-absolute">
                                     </i>
                                 }
                             </div>

                             <div className="ttr-card-text">{feature.food}</div>
                             <div className="ttr-card-text">{feature.price}</div>
                         </div>
                    )
                }
                </div>
            </div>
        </div>
    )
};
export default FeatureList;