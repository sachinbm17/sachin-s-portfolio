import React from "react";
import boi from "../assests/boi.png";
import "./index.css";

const ProfileCard = () => {
  return (
    <div style={{width:"100%", height:"100vh", overflow:"scroll"}}>

    <div className="profile-card-container">
      <div className="section-1">
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
    </div>

    <div className="profile-card-container">
        <div style={{width:"100%", textAlign:"start" , margin:35}}>
<h2>
    Projects
   </h2>

   <div style={{display: "flex", flexDirection: "row" , justifyContent:"space-between", 
marginTop:30   }}>
    <div style={{fontWeight:"600", fontSize: "20px", width: "200px" ,marginRight:20}}>
       Sport team management
    </div>
     <div style={{fontWeight:"500", fontSize: "20px"}}>
 Built and delivered a complete calendar module using React.js and FullCalendar, enabling event scheduling, drag-and-drop creation, recurrence management, and conflict detection.

Extended FullCalendar with custom React components and hooks to support multiple user roles and improve accessibility.

Integrated REST APIs for real-time event updates and participant availability checks.

Improved performance through memoization (React.memo, useCallback, useMemo) and lazy loading, ensuring smooth user experience with large datasets.

Took ownership of the feature from UI/UX implementation to backend integration and testing, delivering production-ready results within sprint timelines.
    </div>
    


   </div>

   <div style={{display: "flex", flexDirection: "row" , justifyContent:"space-between", 
marginTop:30 , paddingBottom:50  }}>
    <div style={{fontWeight:"600", fontSize: "20px", width: "200px" ,marginRight:20}}>
       Education App for IAS Aspirants
    </div>
     <div style={{fontWeight:"500", fontSize: "20px"}}>
 Developed a modular learning platform using React.js, Redux, and TypeScript, supporting video lectures, PDF uploads, and article creation for IAS exam preparation.

Built reusable React components for content creation workflows (PDF upload, video management, and article editor), ensuring consistency and reducing development time across modules.

Implemented a quiz creation system with complex conditional flows and state management, enabling dynamic question rendering, scoring, and navigation.

Designed a notes feature with persistent local and API-synced storage, improving user engagement and retention.

Optimized user experience by introducing a question navigator system, improving test-taking efficiency and boosting user adoption.

Delivered features end-to-end, including UI development, API integration, and testing, under tight deadlines and regular stakeholder demos.
    </div>
    


   </div>

        </div>
   

   </div>
    </div>

  );
};

export default ProfileCard;
