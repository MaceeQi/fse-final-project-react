import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signupThunk} from "../../services/auth-thunks";
import React from "react";
import {Navigate} from "react-router-dom";
import {createRestaurantThunk} from "../../services/restaurants-thunks";

const Register = () => {
    const {currentUser} = useSelector(state => state.usersData);
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const signup = () => {
            dispatch(signupThunk(newUser))
    }

    if(currentUser) {
        return (<Navigate to={'/profile'}/>);
    }

    return (
        <div className="mt-3">
            <h1>Register</h1>
            <input className="mb-2 form-control"
                   placeholder="username (required)"
                   onChange={(e) =>
                       setNewUser({...newUser, username: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="password (required)" type="password"
                   onChange={(e) =>
                       setNewUser({...newUser, password: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="firstname"
                   onChange={(e) =>
                       setNewUser({...newUser, firstName: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="lastname"
                   onChange={(e) =>
                       setNewUser({...newUser, lastName: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="email (required)"
                   type="email"
                   onChange={(e) =>
                       setNewUser({...newUser, email: e.target.value})}/>
            <select className="mb-2 form-control wd-edit-input"
                    onChange={(e) => {
                        setNewUser({...newUser, type: e.target.value})}}>
                <option value="AVERAGE">
                    AVERAGE</option>
                <option value="BUSINESS">
                    BUSINESS</option>
                <option value="CRITIC">
                    CRITIC</option>
            </select>
            <input className="mb-2 form-control"
                   placeholder="profile photo url"
                   type="url"
                   onChange={(e) =>
                       setNewUser({...newUser, profilePhoto: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="header image url"
                   type="url"
                   onChange={(e) =>
                       setNewUser({...newUser, headerImage: e.target.value})}/>
            <textarea className="mb-2 form-control"
                      placeholder="biography"
                      onChange={(e) =>
                          setNewUser({...newUser, biography: e.target.value})}/>
            <input className="mb-2 form-control"
                   type="date"
                   title="date of birth"
                   onChange={(e) =>
                       setNewUser({...newUser, dateOfBirth: e.target.value})}/>
            <button className="btn btn-primary mb-5"
                    onClick={signup}>Register</button>
        </div>
    );
}
export default Register;