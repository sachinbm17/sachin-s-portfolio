import React from "react";
import boi from "../assests/boi.png";
import insta from "../assests/insta.png";
import linkedin from "../assests/linkedin.png";
import fb from "../assests/fb.png";
import whatsapp from "../assests/whatsapp.png";
import { devDetails } from "../staticData/data.ts";
import LongProgressBar from "../components/LongProgressBar.tsx";



const ProfileSider = () => {

  const handleDownload = () => {
  fetch("/resume.pdf")
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Sachin-Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
};

  return (
    <div className="profile-container">
      <img src={boi} width="100px" height="100px" className="profile-style" />
      <p className="name-title">Sachin B M</p>
      <p className="designation">Front-End Developer</p>
      <div className="social-media-container">
        <img src={insta} width="20px" height="20px" onClick={() => window.open('https://www.instagram.com/sachinbm17?igsh=MTR1N2h2Z2h5dzFtdA%3D%3D&utm_source=qr','_blank', 'noopener,noreferrer') } />
        <img src={fb} width="20px" height="20px" onClick={() => window.open("https://www.facebook.com/share/17Gzuqce4C/?mibextid=wwXIfr", '_blank', 'noopener,noreferrer')}  />
        <img src={linkedin} width="20px" height="20px" onClick={() => window.open( "https://www.linkedin.com/in/sachin-b-m-643479185", '_blank', 'noopener,noreferrer') }  />
        <img src={whatsapp} width="20px" height="20px" onClick={() => window.open("https://wa.me/919483760757",'_blank', 'noopener,noreferrer')}  />
      </div>
      <hr className="divider" />
      {devDetails.map((item) => {
        return (
          <div className="dev-details">
            <div className="details-quest"> {item.quest}</div>
            <div className="details-ans"> {item.ans}</div>
          </div>
        );
      })}
      <hr className="divider" />
      <h3>Languages</h3>
      <div style={{ width: "200px" }}>
        <LongProgressBar text="Kannada" progress={100} color="#5486e8" />
        <LongProgressBar text="English" progress={90} color="#5486e8" />
        <LongProgressBar text="Hindi" progress={60} color="#f9a825" />
      </div>
      <hr className="divider" />

      <h3>Skills</h3>
      <div style={{ width: "200px" }}>
        <LongProgressBar text="Javascript" progress={90} color="#f9a825" />
        <LongProgressBar text="Typescript" progress={95} color="#5486e8" />
        <LongProgressBar text="React" progress={90} color="#5486e8" />
        <LongProgressBar text="Redux" progress={95} color="#5486e8" />
        <LongProgressBar text="Css/Scss" progress={90} color="#5486e8" />
      </div>
      <hr className="divider" />
      <a className="resume-button" onClick={handleDownload}  href="build/resume.pdf" download="Sachin-Resume.pdf">
        Download CV
      </a>
      <hr className="divider" />

    </div>
  );
};

export default ProfileSider;
