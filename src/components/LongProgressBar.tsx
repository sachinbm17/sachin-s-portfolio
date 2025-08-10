import React from "react";

const LongProgressBar = ({ text, progress, color }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    justifyContent:"flex-start"
  };

  const labelStyle = {
    flex: "1",
    color: "#8b8b8b", // gray text for text name
    fontWeight: "500",
    fontSize: "14px",
    textAlign:"start"
  };

  const percentStyle = {
    width: "40px",
    textAlign: "right",
    fontWeight: "600",
    fontSize: "14px",
    color: "#333",
    marginLeft: "10px",
  };

  const barBackgroundStyle = {
    flex: "4",
    height: "6px",
    backgroundColor: "#eee",
    borderRadius: "10px",
    marginRight: "15px",
    position: "relative",
  };

  const barProgressStyle = {
    height: "10px",
    width: `${progress}%`,
    backgroundColor: color || "#f9a825", // default goldish color
    borderRadius: "10px",
    position: "absolute",
    top: "-2px", // to make it thicker than background bar
    left: "0",
    transition: "width 0.3s ease",
  };

  return (
    <div>
        <div style={labelStyle}>{text}</div>
          <div style={containerStyle}>
      <div style={barBackgroundStyle}>
        <div style={barProgressStyle}></div>
      </div>
      <div style={percentStyle}>{progress}%</div>
    </div>
    </div>
  
  );
};

export default LongProgressBar;
