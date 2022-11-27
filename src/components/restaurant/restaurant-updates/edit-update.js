import React, {useState} from "react";
import { createUpdate,deleteUpdate } from "./update-reducer";
import {useDispatch, useSelector} from "react-redux";

const EditUpdate = ({restaurant}) => {
    const updates = useSelector(state=> state.updates);
    const [editUpdate, setUpdate] = useState('');
    const dispatch = useDispatch();

    const updateChangeHandler = (event) => {
        setUpdate(event.target.value);
    }
    
    const updateSubmitHandler = () => {
        const newUpdate = {
            update: editUpdate,
            restaurantId: restaurant._id,
        }
        dispatch(createUpdate(newUpdate));
    }

    const deleteUpdateHandler = (updateId) => {
        dispatch(deleteUpdate(updateId));
    }

    return (
        <div className="mt-2 mb-2">
            <div className="ttr-border p-2 mb-3">
                <label className="fw-bolder pt-2 ps-2">Updates</label>
                <div className="row pb-3">
                    <ul>
                        {
                        updates.filter(update => update.restaurantId === restaurant._id)
                            .map(update =>
                            <li key={update._id} className="list-group-item">
                                <div className="row pt-3">
                                    <div className="col-11">
                                        <textarea id="update" placeholder="New dish is out!"
                                                className="form-control border-secondary"
                                                type="update" defaultValue={update.update} readOnly/>
                                    </div>
                                    <div className="col-1 p-0 align-self-center ">
                                        <i className="btn fa-regular fa-trash-can"
                                            onClick={()=>deleteUpdateHandler(update._id)}></i>
                                    </div>
                                </div>
                            </li>
                        )
                        }
                    </ul>
                </div>

                <div>
                    <div className="pb-3">
                        <textarea id="update" placeholder="Add a new update!"
                                className="form-control border-secondary"
                                type="update" onChange={updateChangeHandler}
                                value={editUpdate}/>
                    </div>
                    <div className="row justify-content-center">
                        <button 
                        onClick={updateSubmitHandler}
                        className="col-3 btn btn-sm btn-secondary">Add Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default EditUpdate;