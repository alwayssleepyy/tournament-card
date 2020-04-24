import React from "react";

const TournamentDetailsSubtitle = ({ children, ...rest }) => {
  return (
    <div style={{ fontSize: "1.5rem", fontWeight: "600" }} {...rest}>
      {children}
    </div>
  );
};

export default TournamentDetailsSubtitle;
