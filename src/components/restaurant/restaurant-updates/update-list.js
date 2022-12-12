import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUpdatesByRestaurantThunk} from "../../../services/restaurant-updates-thunks";

const UpdateList = ({restaurant}) => {
    const {updates} = useSelector(state=> state.updates);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findUpdatesByRestaurantThunk(restaurant._id));
    }, [dispatch, restaurant._id])

    return (
        <div className="mb-3 border ttr-border-radius">
            <div>
                <h5 className="m-2 fw-bolder">Updates</h5>
                <ul>
                    {
                        updates.map(update =>
                            <li key={update._id}>
                                {update.update}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
};
export default UpdateList;