import React, { useEffect, useState } from "react";
import YoutubeLogo from "../assets/youtubeblack.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faBagShopping, faGraduationCap, faMusic, faHeadset, faMagnifyingGlass,
  faTrophy, faNewspaper, faGamepad, faFilm, faHouse, faCircleUser, faFire,
  faMicrophone, faVideo, faTv, faClockRotateLeft, faShirt, faPodcast,
  faGear, faFlag, faCircleInfo, faMessage,
  faUpload,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import SideBar from "./Sidebar";
import Login from "./Login";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import UploadVideo from "./UploadVideo";
import axios from "axios";


function Header({ setSearchQuery, toggleSidebar, isSidebarActive }) {
  // State to control login modal visibility
  const [login, setLogin] = useState(false);

  // State to hold profile picture URL
  const [profilePic, setProfilePic] = useState(null);

  // State to track if user is logged in or not
  const [isLogedin, setIsLogedIn] = useState(false);

  // State to toggle user menu dropdown
  const [showUserMenu, setShowUserMenu] = useState(false);

  // React Router hook for navigation
  const navigate = useNavigate();

  // State for search input field value
  const [inputValue, setInputValue] = useState('');

  // State to show or hide search bar on smaller screens
  const [showSearch, setShowSearch] = useState(false);

  // State to keep track of current window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle login/logout button clicks
  const onclickofPopOption = (button) => {
    if (button === "login") {
      // Show login modal if user clicks sign in
      setLogin(true);
    } else {
      // If logout clicked, clear storage, call logout API, navigate home and reload
      localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 2000);
    }
  };

  // Function to call backend logout API endpoint
  const getLogoutFun = async () => {
    axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to close login modal
  const setLoginModel = () => {
    setLogin(false);
  };

  // to check if user is logged in and get profile pic from localStorage
  useEffect(() => {
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLogedIn(localStorage.getItem("userId") !== null);
    if (userProfilePic !== null) {
      setProfilePic(userProfilePic);
    }
  }, []);

  // Toggle user dropdown menu visibility
  const toggleUserMenu = () => {
    setShowUserMenu(prev => !prev);
  };

  // Navigate to the users profile page using their userId from localStorage
  const handleProfile = () => {
    let userId = localStorage.getItem("userId");
    navigate(`/user/${userId}`);
  };

  // Set the search query in parent component when user clicks search or presses enter
  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  // Listen for window resize and update windowWidth state to handle responsive UI
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle the visibility of the search bar on small screen devices
  const toggleSearch = () => {
    console.log("its trigered");
    
    if (windowWidth <= 660) {
      setShowSearch(prev => !prev);
    }
    console.log('Toggling search. Current:', showSearch);
  };
  return (
    <>
      <div className="header_parent">
        <div className="header">
          <div className="header_left">
            <div onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} className="header_icons" />
            </div>
            <img src={YoutubeLogo} alt="YouTube Logo" className="header_logo" />
          </div>
          

          <div className={`header_input ${showSearch ? 'active' : ''}`}>
              <div className="header_middle">
                <FontAwesomeIcon icon={faArrowLeft} className="BackArrow"/>
                <input
                  type="text"
                  placeholder="Search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
                  className="SearchInput"
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearch} className="header_searchbtn" />
              </div>
            <FontAwesomeIcon icon={faMicrophone} className="micro_icons" />
          </div>


          <div className="header_right">
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch} className="search_icon_only" />
            <FontAwesomeIcon icon={faMicrophone} className="micro_icons-smal" />
            {isLogedin && <Link to="/UploadVideo" className="UploadIcon">
              <FontAwesomeIcon icon={faUpload} />
            </Link> }

            {isLogedin && (
              <div className="user_menu_container">
                <img
                  src={profilePic || "/default-profile.png"}
                  alt="Profile"
                  className="profile_image"
                  onClick={toggleUserMenu}
                />
                {showUserMenu && (
                  <div className="user_dropdown">
                    <div  className="user_menu_item" onClick={handleProfile}>View Channel</div>
                    <div className="user_menu_item" onClick={() => onclickofPopOption("logout")}>Logout</div>
                  </div>
                )}
              </div>
            )}

            {!isLogedin && <button className="sign_btn" onClick={() => onclickofPopOption("login")}>
              <FontAwesomeIcon icon={faCircleUser} className="sign_icons" />
              Sign in
            </button>}
          </div>


          {login && <Login />}
          {login && <Login setLoginModel={setLoginModel} />}
        </div>

        <div className={`sidebar_row ${isSidebarActive ? 'active' : ''}`}>
          <Link to='/' className="no-decoration"> <SideBar icon={<FontAwesomeIcon icon={faHouse} />} title="Home" /> </Link>
          <SideBar icon={<FontAwesomeIcon icon={faVideo} />} title="Shorts" />
          <SideBar icon={<FontAwesomeIcon icon={faTv} />} title="Subscriptions" />
          <hr />
          <SideBar icon={<FontAwesomeIcon icon={faCircleUser} />} title="You" />
          <SideBar icon={<FontAwesomeIcon icon={faClockRotateLeft} />} title="History" />
          <hr />
          <h3>Explore</h3>
          <SideBar icon={<FontAwesomeIcon icon={faFire} />} title="Trending" />
          <SideBar icon={<FontAwesomeIcon icon={faBagShopping} />} title="Shopping" />
          <SideBar icon={<FontAwesomeIcon icon={faMusic} />} title="Music" />
          <SideBar icon={<FontAwesomeIcon icon={faFilm} />} title="Movies" />
          <SideBar icon={<FontAwesomeIcon icon={faHeadset} />} title="Live" />
          <SideBar icon={<FontAwesomeIcon icon={faGamepad} />} title="Gaming" />
          <SideBar icon={<FontAwesomeIcon icon={faNewspaper} />} title="News" />
          <SideBar icon={<FontAwesomeIcon icon={faTrophy} />} title="Sports" />
          <SideBar icon={<FontAwesomeIcon icon={faGraduationCap} />} title="Courses" />
          <SideBar icon={<FontAwesomeIcon icon={faShirt} />} title="Fashion & Beauty" />
          <SideBar icon={<FontAwesomeIcon icon={faPodcast} />} title="Podcasts" />
          <hr />
          <h3>More from YouTube</h3>
          <SideBar icon={<FontAwesomeIcon icon={faClockRotateLeft} />} title="YouTube Music" />
          <SideBar icon={<FontAwesomeIcon icon={faClockRotateLeft} />} title="YouTube Kids" />
          <hr />
          <SideBar icon={<FontAwesomeIcon icon={faGear} />} title="Settings" />
          <SideBar icon={<FontAwesomeIcon icon={faFlag} />} title="Report history" />
          <SideBar icon={<FontAwesomeIcon icon={faCircleInfo} />} title="Help" />
          <SideBar icon={<FontAwesomeIcon icon={faMessage} />} title="Send feedback" />
          <hr />
          <div className="footer">
            <p>About &nbsp;Press&nbsp;Copyright</p>
            <p>Contact us&nbsp;Creators</p>
            <p>Advertise&nbsp;Developers</p>
            <br />
            <p>Terms&nbsp;Privacy&nbsp;Policy & Safety</p>
            <p>How YouTube works</p>
            <p>Test new features</p>
            <br />
            <p style={{ color: "rgb(142,142,142)" }}>&#169; 2025 Google LLC</p>
          </div>
        </div>

        <div className={`mini_sidebar ${isSidebarActive ? 'active' : ''}`}>
          <div className="miniDiv">
            <FontAwesomeIcon className = "mini_icons" icon={faHouse} />
            <p>Home</p>
          </div>
          <div className="miniDiav">
            <FontAwesomeIcon className = "mini_icons" icon={faVideo} />
            <p>Shorts</p>
          </div>
          <div className="miniDiv">
            <FontAwesomeIcon className = "mini_icons" icon={faTv} />
            <p>Subscription</p>
          </div>
          <div className="miniDiv">
            <FontAwesomeIcon className = "mini_icons" icon={faCircleUser} />
            <p>You</p>
          </div>
          <div className="miniDiv">
            <FontAwesomeIcon className = "mini_icons" icon={faClockRotateLeft} />
            <p>History</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
