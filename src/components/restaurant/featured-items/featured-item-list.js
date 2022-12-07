import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findFeaturedItemsByRestaurantThunk} from "../../../services/featured-item-thunks";
import {useLocation} from "react-router-dom";

const FeatureList = () => {
    const {features} = useSelector(state => state.features);
    // need to update change publicPage to current user after implementing login signup
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const restId = paths[paths.length-1];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFeaturedItemsByRestaurantThunk(restId));
    }, [restId, dispatch])

    // console.log(features);

    return (
        <div className="mb-3 border ttr-border-radius">
            <h5 className="m-2 fw-bolder">Featured Items</h5>
            <div className="ttr-scroll-menu m-2">
                <div className="row flex-row flex-nowrap">
                {
                    features.slice(0).reverse().map(feature =>
                         <div className="card ttr-card-block border" key={feature._id}>
                             <div className="position-relative">
                                 {
                                     (!feature.photo) &&
                                     <img className="card-img-top ttr-card-photo mt-2 mb-1"
                                          alt="food"
                                          src={`/images/emptyFood.jpeg`}/>
                                 }
                                 {
                                     feature.photo && feature.photo.includes("http") &&
                                     <img className="card-img-top ttr-card-photo mt-2 mb-1"
                                          src={feature.photo} alt="food"/>
                                 }
                                 {
                                     feature.photo && !feature.photo.includes("http") &&
                                     <img className="card-img-top ttr-card-photo mt-2 mb-1"
                                          alt="food"
                                          src={`/images/${feature.photo}`}/>
                                 }
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