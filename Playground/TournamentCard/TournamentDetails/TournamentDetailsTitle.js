import React from "react";

const TournamentDetailsTitle = ({ children, ...rest }) => {
  return (
    <div
      style={{
        color: "#a6a6a6",
        fontSize: "1.3rem",
        fontWeight: "600",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TournamentDetailsTitle;
