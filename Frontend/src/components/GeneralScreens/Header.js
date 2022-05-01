import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import SearchForm from "./SearchForm";
import "../../Css/Header.css";
import { RiPencilFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import SkeletonElement from "../Skeletons/SkeletonElement";
import { AuthContext } from "../../Context/AuthContext";
import SearchBox from "./SearchBox";
import "../../Css/Home.css";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header>
      <div className="averager">
        <Link to="/" className="logo">
          <h5>
            <img src="https://i.ibb.co/yhw3gtQ/1080.png" width="50" />
          </h5>
        </Link>
        {/* <SearchForm /> */}
        <div className="header_options">
          {auth ? (
            <div className="auth_options">
              <Link className="addStory-link" to="/addstory">
                <RiPencilFill /> Add Story{" "}
              </Link>

              <Link to="/readList" className="readList-link">
                <BsBookmarks />
                <span id="readListLength">{activeUser.readListLength}</span>
              </Link>

              <div className="header-profile-wrapper ">
                {loading ? (
                  <SkeletonElement type="minsize-avatar" />
                ) : (
                  <img
                    // src={`/userPhotos/${activeUser.photo}`}
                    alt={activeUser.username}
                    src="https://i.ibb.co/f8ZtpLm/Splash-Logo.png"
                    width="50"
                  />
                )}

                <div className="sub-profile-wrap  ">
                  <Link className="profile-link" to="/profile">
                    {" "}
                    <FaUserEdit /> Profile{" "}
                  </Link>

                  <button className="logout-btn" onClick={handleLogout}>
                    {" "}
                    <BiLogOut /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="noAuth_options">
              <Link className="login-link" to="/login">
                {" "}
                Login{" "}
              </Link>

              <Link className="register-link" to="/register">
                {" "}
                Get Started
              </Link>
            </div>
          )}

          <div className="searchform">
            <SearchBox />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
