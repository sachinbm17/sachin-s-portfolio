import React from "react";
import boi from "../assests/boi.png";
import "./index.css";

const ProfileCard = () => {
  return (
    <div style={{width:"100%", height:"100vh", overflow:"scroll"}}>

    <div className="profile-card-container">
      <div className="section-1">
        <div className="empty-circle" />
        <div className="triangle" />


        
        <h3 className="name-title">

          <span>I'm Sachin B M</span>
          <br />
          <span style={{ color: "gray" }}>Front-end</span>
          <span> Developer</span>
        </h3>
        <p className="dev-description">
            Sachin is a front-end developer with 5+ years of experience in React Js and TypeScript. He has extensive experience in developing dynamic and responsive web applications, with a strong emphasis on creating user-friendly interfaces. He has strong experience in React.js, Redux for state management, integrating RESTful APIs, and creating reusable components for code maintainability. He has strong experience in SDLC end-to-end workflow covering everything from design and development to deployment and maintenance. He actively participates in Agile practices, including sprint planning, daily stand-ups, and retrospectives. He follows best practices and coding standards, consistently delivering clean and maintainable code.
        </p>
      </div>
      <div>
     <img src={boi} width="100%" height="50%"  />
      </div>
    </div>

    <div className="profile-card-container">
        <div style={{width:"100%", textAlign:"start" , margin:35}}>
<h2>
    Education
   </h2>

   <div style={{display: "flex", flexDirection: "row" , justifyContent:"space-between", 
marginTop:30   }}>
    <div style={{fontWeight:"500", fontSize: "20px"}}>
        JSS College Mysore
    </div>
     <div style={{fontWeight:"500", fontSize: "20px"}}>
   Bachelor of Vocation (B.Voc) on Software development (Jun 2016 - Jul 2019)
    </div>

   </div>
        </div>
   

   </div>
    </div>

  );
};

export default ProfileCard;
