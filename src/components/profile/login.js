import {useState} from "react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/auth-thunks";
import {Navigate} from "react-router-dom";
import Register from "./register";

const Login = () => {
    const {currentUser} = useSelector(state => state.usersData);
    const [loginUser, setLoginUser] = useState({});

    const dispatch = useDispatch();

    const login = () => {
            dispatch(loginThunk(loginUser));
    }

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <div>
          <Register/>

          <h1>Login</h1>
          <input className="mb-2 form-control"
                 onChange={(e) =>
                   setLoginUser({...loginUser, username: e.target.value})}
                 placeholder="username"/>
          <input className="mb-2 form-control"
                 onChange={(e) =>
                   setLoginUser({...loginUser, password: e.target.value})}
                 placeholder="password" type="password"/>
          <button onClick={login} className="btn btn-primary mb-5">Login</button>
        </div>
    );
};
export default Login;