import {createRestaurantThunk} from "../../services/restaurants-thunks";
import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../../services/users-thunks";

const CreateBusinessPage = ({user}) => {
    const {currentRestaurant} = useSelector(state => state.restaurantsData);
    const dispatch = useDispatch();

    const createClickHandler = () => {
        const newRest = {
            name: "business",
            ownedBy: user._id,
            handle: "business",
            cuisine: "cuisine",
            price: "price",
            address: "address",
            phone: "phone",
        }
        dispatch(createRestaurantThunk(newRest))
            .then((currentRestaurant) &&
                dispatch(updateUserThunk({...user, business: currentRestaurant._id})))
            .then(alert("Business page is created successfully!"))

    }

    return(
        <div className="mt-2 btn btn-large btn-light border border-secondary fw-bolder
        rounded-pill fa-pull-right float-end" onClick={createClickHandler}>
            Create Business Profile
        </div>
    );
}
export default CreateBusinessPage;