import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import React, { useEffect, useState } from 'react'; // Import necessary hooks
import axios from 'axios';

export default function GithubProfileCard() {
  // Set hireable status based on the isHireable variable

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">Discuss a project or just want to say hi? My inbox is open for all inquiries.</p>
            </div>
            <h2 className="bio-text">A Full Stack Developer skilled in Python, React & Django. Currently pursuing M.Sc. in Computer Science. Building web applications, exploring new technologies!</h2> {/* Display the bio with emoji */}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: Yes
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={require("../../assets/images/me.png")}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
