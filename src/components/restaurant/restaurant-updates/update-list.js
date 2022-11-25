import React from "react";
import UpdateItem from "./update-item";
import {useSelector} from "react-redux";

const UpdateList = ({restaurant}) => {
    const updates = useSelector(state => state.updates);

    return (
        <div className="mb-3 border ttr-border-radius">
            <div>
                <h5 className="m-2 fw-bolder">Updates</h5>
                <ul>
                    {
                        updates.filter(update => update.restaurantId === restaurant._id)
                            .map(update =>
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