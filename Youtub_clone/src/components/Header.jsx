import React from "react";
import YoutubeLogo from "../assets/youtubeblack.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from "./Sidebar";
import { faBars,faBagShopping,faGraduationCap,faMusic, faHeadset, faMagnifyingGlass,faTrophy,faNewspaper,faGamepad,faFilm,faHouse,faCircleUser,faFire, faMicrophone, faVideo, faTv,faClockRotateLeft, faShirt, faPodcast, faGear, faFlag, faCircleInfo, faMessage } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Login from "./Login";

// import { width } from "@fortawesome/free-solid-svg-icons/fa0";


function Header(){
    const toggleSidebar = () => {
        const sidebar_row = document.querySelector(".sidebar_row");
        const MiniSidebar = document.querySelector(".mini_sidebar")
    if(sidebar_row){
        sidebar_row.classList.toggle('active');
    }
    if(MiniSidebar){
        MiniSidebar.classList.toggle('active');
    }
    }

    return (
        <>
        <div className="header_parent">
             <div className="header">
            <div className="header_left">
               <div onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} className="header_icons"/></div>
               <img src={YoutubeLogo} alt="YouTube Logo" className="header_logo" />
            </div>
            <div className="header_input">
                <div className="header_middle">
                <input type="text" placeholder="Search" className="SearchInput"  />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="header_searchbtn"/>
             </div>
             <FontAwesomeIcon icon={faMicrophone} className="micro_icons"/>
            </div>
            <div className="header_right">
                <button className="sign_btn">
                    <FontAwesomeIcon icon={faCircleUser} className="sign_icons"/>
                    Sign in</button>
            </div>
            
            

        </div>
        <div className="sidebar_row">
                <SideBar icon={<FontAwesomeIcon icon={faHouse} />} title="Home" />
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
                {/* <SideBar icon={<FontAwesomeIcon icon={fa} />} title="YouTube Premium" /> */}
                <SideBar icon={<FontAwesomeIcon icon={faClockRotateLeft} />} title="YouTube Music" />
                <SideBar icon={<FontAwesomeIcon icon={faClockRotateLeft} />} title="YouTube Kids" />
                <hr />
                <SideBar icon={<FontAwesomeIcon icon={faGear} />} title="Settings" />
                <SideBar icon={<FontAwesomeIcon icon={faFlag} />} title="Report history" />
                <SideBar icon={<FontAwesomeIcon icon={faCircleInfo} />} title="Help" />
                <SideBar icon={<FontAwesomeIcon icon={faMessage} />} title="Send feedback" />
                <hr />
                <div className="footer">
                    <p>About &nbsp;press&nbsp; Copyright</p>
                    <p>Contact us&nbsp;Creators</p>
                    <p>Adveerise &nbsp;Developers</p>
                    <br />
                    <p>Terms&nbsp;Privacy&nbsp;Policy & Safety</p>
                    <p>How youtube works</p>
                    <p>Test new features</p>
                    <br />
                    <p style={{color:"rgb(142,142,142"}}>&#169; 2025 Google LLC</p>
                </div>
            </div>
            <div className="mini_sidebar">
              <div className="miniDiv">
                <FontAwesomeIcon icon={faHouse}/>
                <p>Home</p>
                </div> 
                <div className="miniDiv">
                    <FontAwesomeIcon icon ={faVideo}/>
                    <p>Shorts</p>
                </div>
                <div className="miniDiv">
                    <FontAwesomeIcon icon ={faTv}/>
                    <p>Subscription</p>
                </div>
                <div className="miniDiv">
                    <FontAwesomeIcon icon={faCircleUser}/>
                    <p>You</p>
                </div>
                <div className="miniDiv">
                    <FontAwesomeIcon icon={faClockRotateLeft}/>
                    <p>History</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;