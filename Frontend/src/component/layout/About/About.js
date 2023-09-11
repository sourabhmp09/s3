import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram"

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/sourabh_mp09";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "2vmax 0" }}

              src="https://res.cloudinary.com/dhhlk3hzz/image/upload/v1688311270/profile%20img/20230702_190144-removebg-preview_ddh4bm.png"
              alt="Founder"
            />
            <Typography>Sourabh  Lodhi</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span> 
            <h2>
 <AddIcCallIcon />
            Contact     <mark>9555589940 </mark> 
            </h2>
             {/* <bold>   Contact</bold><mark> 9555589940 </mark> */}
              </span>
            <span>
              This is a sample wesbite made by Sourabh Lodhi
              
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">please follow</Typography>
            

            <a href="https://instagram.com/sourabh_mp09" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
