import React, {useEffect, useState} from "react";
import Tuits from "../tuits";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../../services/users-thunks";
import {useNavigate} from "react-router-dom";
import {logoutThunk} from "../../services/auth-thunks";
import CreateBusinessPage from "./create-business-page";

const Profile = () => {
  const {currentUser, publicProfile}= useSelector(state => state.usersData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutThunk())
        .then(() => navigate('/login'));
  }

  useEffect(() => {
    if (currentUser) {
      try {
        dispatch(findUserByIdThunk(currentUser._id))
      }
      catch(e) {
        navigate('/login');
      }
    }
  }, [currentUser]);

  let profile = publicProfile;

  const dayOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return(
    <div className="ttr-profile">
      {
        profile &&
        <>
          <div className="border border-bottom-0">
            <h4 className="p-2 mb-0 pb-0 fw-bolder">{profile.firstName} {profile.lastName}<i className="fa fa-badge-check text-primary"></i></h4>
            <div className="mb-5 position-relative">
              {
                !profile.headerImage &&
                <img className="w-100" src="/images/emptyHeader.jpeg" alt="header image"/>
              }
              <div className="bottom-0 left-0 position-absolute">
                <div className="position-relative">
                  {
                      (!profile.profilePhoto) &&
                      <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                           alt="profilePhoto"
                           src={`/images/emptyAvatar.png`}/>
                  }
                  {
                      profile.profilePhoto && profile.profilePhoto.includes("http") &&
                      <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                           src={profile.profilePhoto} alt="profilePhoto"/>
                  }
                  {
                      profile.profilePhoto && !profile.profilePhoto.includes("http") &&
                      <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                           alt="profilePhoto"
                           src={`/images/${profile.profilePhoto}`}/>
                  }
                </div>
              </div>
              <Link to="/profile/edit"
                    className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                Edit profile
              </Link>
            </div>

            <div className="p-2">
              <h4 className="fw-bolder pb-0 mb-0">
                {profile.username}<i className="fa fa-badge-check text-primary"></i>
              </h4>
              <h6 className="pt-0">@{profile.type}</h6>
              {
                  profile.type === "BUSINESS" &&
                  <>
                    <CreateBusinessPage user={profile}/>
                    <i className="far fa-link ms-3 me-2"></i>
                    <Link to="/profile/business" className="nav-link">
                      <span>Business Profile Page</span>
                    </Link>
                  </>
              }
              <p>
                {
                  profile.dateOfBirth &&
                  <>
                    <i className="far fa-balloon ms-3 me-2"></i>
                    <span className="text-secondary me-3">
                        Born {
                      new Date(profile.dateOfBirth)
                          .toLocaleString('en-US', dayOptions)
                    }</span>
                  </>
                }
                {
                  profile.joined &&
                  <>
                    <i className="far fa-calendar me-2"></i>
                    <span className="text-secondary">Joined {
                      new Date(profile.joined)
                          .toLocaleString('en-US', dayOptions)
                    }</span>
                  </>
                }
              </p>
              <ul className="mt-4 nav nav-pills nav-fill">
                <li className="nav-item">
                  <Link to="/profile/tuits"
                        className="nav-link active">
                    Tuits</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile/tuits-and-replies"
                        className="nav-link">
                    Tuits & replies</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile/media"
                        className="nav-link">
                    Media</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile/likes"
                        className="nav-link">
                    Likes</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2">
            <button className="btn btn-primary mb-5"
                    onClick={logout}>Logout
            </button>
          </div>
          <Tuits/>
        </>
      }
    </div>
  );
}
export default Profile;