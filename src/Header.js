import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessIcon from "@material-ui/icons/Business";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
          alt=""
        />
        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationsIcon} title="Notificaton" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/a-/AOh14GhrtG01bjQa4OLJpJKkEu6tomgn_DTBDo0B22Ub=s96-c"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
