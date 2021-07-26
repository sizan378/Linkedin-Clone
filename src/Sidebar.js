import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sizan Mahmud</h2>
        <h4>sizanmahmud@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who view you</p>
          <p className="sidebar__statNumber">52,452</p>
        </div>
        <div className="sidebar__stat">
          <p> Views on post </p>
          <p className="sidebar__statNumber">5,452</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p> Recent</p>
        {recentItem("reactjs")}
        {recentItem("programing")}
        {recentItem("developer")}
        {recentItem("softowerengineer")}
        {recentItem("djangodeveloper")}
        {recentItem("javasctiptdeveloper")}
      </div>
    </div>
  );
}

export default Sidebar;
