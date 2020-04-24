import React from "react";

const PlayerImage = ({ ...rest }) => {
  return (
    <img
      style={{
        borderRadius: "50%",
        height: "4rem",
        width: "4rem",
        border: "3px solid #171a21",
        marginRight: "-1rem",
      }}
      {...rest}
    />
  );
};

export default PlayerImage;
