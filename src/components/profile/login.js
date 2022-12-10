import {useState} from "react";
// import * as service from "../../services/users-service";
import React from "react";
// import {UserList} from "./user-list";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/auth-thunks";
import {Navigate} from "react-router-dom";
import Register from "./register";

const Login = () => {
    const {currentUser} = useSelector(state => state.usersData);
    const [loginUser, setLoginUser] = useState({});
    // const [existingUsers, setExistingUsers] = useState([]);

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const login = () => {
            dispatch(loginThunk(loginUser));
    }

    // const deleteUser = (uid) =>
    // service.deleteUser(uid)
    //   .then(findAllUsers)
    //
    // const findAllUsers = () =>
    // service.findAllUsers()
    //   .then(users => {
    //     setExistingUsers(users)
    //   })
    //
    // useEffect(findAllUsers, []);

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

          {/*<h1>Login As</h1>*/}

          {/*<UserList users={existingUsers} deleteUser={deleteUser}/>*/}
        </div>
    );
};
export default Login;