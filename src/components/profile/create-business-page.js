import {createRestaurantThunk} from "../../services/restaurants-thunks";
import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../../services/users-thunks";
import {useEffect} from "react";

let businessCreated = 0;

const CreateBusinessPage = ({user}) => {
    const {currentRestaurant} = useSelector(state => state.restaurantsData);
    // console.log(currentRestaurant);
    const dispatch = useDispatch();
    // console.log(user._id);

    useEffect(() => {
        const newRest = {
            name: "business",
            ownedBy: user._id,
            handle: "business",
            cuisine: "cuisine",
            price: "price",
            address: "address",
            phone: "phone",
        };
        // console.log(newRest);
        dispatch(createRestaurantThunk(newRest));
    }, [user, dispatch])

    const createClickHandler = () => {
        dispatch(updateUserThunk({...user, business: currentRestaurant._id}));
        alert("Business page is created successfully!")
        businessCreated += 1;
    }

    return(
        <div className="mt-2 btn btn-large btn-light border border-secondary fw-bolder
        rounded-pill fa-pull-right float-end" onClick={createClickHandler}>
            Create Business Profile
        </div>
    );
}
export default CreateBusinessPage;
export {businessCreated};