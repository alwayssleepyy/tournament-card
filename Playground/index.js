import React from "react";
import NewDashboard from "layouts/NewDashboard";

import TournamentCard from "./TournamentCard";

const Playground = () => {
  return (
    <NewDashboard
      heading1="Playground"
      views={[
        {
          label: "Card",
          name: "card",
          render() {
            return <TournamentCard />;
          },
        },
      ]}
    />
  );
};

export default Playground;
