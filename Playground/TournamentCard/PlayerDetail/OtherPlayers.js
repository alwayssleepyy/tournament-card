import React from "react";

const OtherPlayers = ({ numberOfPlayers, ...rest }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        fontSize: "1.2rem",
        height: "4rem",
        width: "4rem",
        backgroundImage: "linear-gradient(to right, #6441a4, #502687)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
    >
      +{numberOfPlayers}
    </div>
  );
};

export default OtherPlayers;
