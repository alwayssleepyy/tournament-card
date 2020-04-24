import React from "react";

import OtherPlayers from "./PlayerDetail/OtherPlayers";
import PlayerImage from "./PlayerDetail/PlayerImage";
import TournamentDetails from "./TournamentDetails";
import TournamentDetailsTitle from "./TournamentDetails/TournamentDetailsTitle";
import TournamentDetailsSubtitle from "./TournamentDetails/TournamentDetailsSubtitle";

const TournamentCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#20232a",
        width: "40rem",
        borderBottom: "3px solid #502687",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "1rem 2rem",
          backgroundImage:
            "linear-gradient(to bottom, transparent 60%, #171a21 95%, #171a21), url(https://upload.wikimedia.org/wikipedia/en/0/02/CoD_Black_Ops_cover.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div style={{ fontSize: "2rem", height: "30rem" }}>Tournament name</div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.5rem 1.5rem 0",
          }}
        >
          <TournamentDetails>
            <TournamentDetailsTitle>Format</TournamentDetailsTitle>
            <TournamentDetailsSubtitle>1v1</TournamentDetailsSubtitle>
          </TournamentDetails>
          <TournamentDetails>
            <TournamentDetailsTitle>Format</TournamentDetailsTitle>
            <TournamentDetailsSubtitle>1v1</TournamentDetailsSubtitle>
          </TournamentDetails>
          <TournamentDetails>
            <TournamentDetailsTitle>Format</TournamentDetailsTitle>
            <TournamentDetailsSubtitle>1v1</TournamentDetailsSubtitle>
          </TournamentDetails>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1.5rem 2rem",
            }}
          >
            <PlayerImage src="https://cdn.discordapp.com/attachments/578681175346774019/664296255526010881/friberg.png" />
            <PlayerImage src="https://cdn.discordapp.com/attachments/578681175346774019/664297115987476490/friberg.png" />
            <PlayerImage src="https://cdn.discordapp.com/attachments/578681175346774019/664296255526010881/friberg.png" />
            <PlayerImage src="https://cdn.discordapp.com/attachments/578681175346774019/664297115987476490/friberg.png" />
            <OtherPlayers numberOfPlayers="10" />
          </div>

          <button
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              alignSelf: "flex-end",
              backgroundColor: "#502687",
              color: "white",
              border: "none",
              padding: "1.5rem 6rem",
              borderRadius: "2rem 0 0 0",

              borderTop: "2px solid #171a21",
              borderLeft: "2px solid #171a21",
            }}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
