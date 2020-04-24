import React from "react";

const TournamentDetails = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default TournamentDetails;
