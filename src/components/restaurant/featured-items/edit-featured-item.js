import React, {useState} from "react";
import { createFeature,deleteFeature } from "./featured-item-reducer";
import {useDispatch, useSelector} from "react-redux";

const EditFeature = ({restaurant}) => {
    const features = useSelector(state=> state.features);
    const [editFood,setFood] = useState(features.food);
    const [editPrice,setPrice] = useState(features.price);
    const [editPhoto,setPhoto] = useState(features.photo);
    const [editPopular,setPopular] = useState(features.popular);
    const dispatch = useDispatch();

    const foodChangeHandler = (event) => {
        setFood(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const photoChangeHandler = (event) => {
        setPhoto(event.target.files[0].name);
    }

    const popularChangeHandler = (event) => {
        setPopular(event.target.checked);
    }

    const createFeatureHandler = () => {
        const newFeature = {
            restaurant: restaurant._id,
            food: editFood,
            price: editPrice,
            photo: editPhoto,
            popular: editPopular
        }
        dispatch(createFeature(newFeature));
    }

    const deleteFeatureHandler = (featureId) => {
        dispatch(deleteFeature(featureId));
    }

    return (
        <div className="ttr-border p-2 mb-3">
            <label className="fw-bolder p-2">Featured Items</label>
            {/* map item */}
            <ul>
                {
                features.filter(feature => feature.restaurant === restaurant._id)
                    .map(feature =>
                    <li key={feature._id} className="border-0 list-group-item">
                        <div className="ttr-border row p-2 mb-3 m-1">
                            <div className="col-4 align-self-center">
                                <img className="card-img-top ttr-card-photo" alt="foodPic"
                                    src={`../images/${feature.photo}`}/>
                            </div>
                            <div className="col-7">
                                <div>Menu Item Name:</div>
                                <input id="itemName" value={feature.food}
                                    className="p-0 form-control" readOnly/>
                                <div>Menu Item Price:</div>
                                <input id="itemPrice" value={feature.price}
                                    className="p-0 form-control" readOnly/>
                                <input id="popularItem" type="checkbox"
                                    name="popularItem" checked = {feature.popular === true ? 'checked': ''} readOnly/>
                                <label className="p-2" htmlFor="popularItem">Popular Item</label>
                            </div>
                            {/* delete button */}
                            <div className="col-1 p-0 align-self-center ">
                                <i className="btn fa-regular fa-trash-can"
                                    onClick={()=>deleteFeatureHandler(feature._id)}></i>
                            </div>
                        </div>
                    </li>
                )
                }
            </ul>
            {/* add new item */}
            <div className="ttr-border row p-2 mb-3 m-1">
                <div className="col-5 align-self-center">
                    <input type="file" id="foodPic" onChange={photoChangeHandler}
                    accept="image/jpeg, image/png, image/jpg"></input>
                </div>
                <div className="col-7">
                    <div>Menu Item Name:</div>
                    <input id="itemName" value={editFood} 
                        onChange={foodChangeHandler}
                        className="p-0 form-control"/>
                    <div>Menu Item Price:</div>
                    <input id="itemPrice" value={editPrice} onChange={priceChangeHandler}
                        className="p-0 form-control"/>
                    <input id="popularItem" type="checkbox" onChange={popularChangeHandler}
                        name="popularItem" checked={editPopular}/>
                    <label id="popularItem" className="p-2">Popular Item</label>
                </div>
            </div>

            <div className="row justify-content-center">
                <button onClick={createFeatureHandler} type="button"
                className="col-3 btn btn-sm btn-secondary">Add Menu Item</button>
            </div>
        </div>
    )
};
export default EditFeature;