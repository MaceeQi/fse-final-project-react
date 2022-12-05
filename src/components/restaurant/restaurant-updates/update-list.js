import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUpdatesByRestaurantThunk} from "../../../services/restaurant-updates-thunks";
import {useLocation} from "react-router-dom";

const UpdateList = ({restaurant}) => {
    const {updates} = useSelector(state=> state.updates);
    const dispatch = useDispatch();

    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const restId = paths[paths.length-1];

    useEffect(() => {
        dispatch(findUpdatesByRestaurantThunk(restId));
    }, [dispatch, restId])

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