import React from "react";
import { useTheme } from "@mui/material/styles";

import { useLocation } from "react-router-dom";
import MapInfo from "../Composents/MapInfo";
import Weather from "../Composents/Weather";
import InfoCard from "../Composents/InfoCard";
import Card from "@mui/material/Card";
const CountryInfo = () => {
  const { state } = useLocation();
  const position = state.e["latlng"];
  const name = state.e["name"];

  const theme = useTheme();
  return (
    <div>
      <InfoCard state={state} />
      <Card sx={{ margin: "auto", width: "80%", marginBottom: 3 }}>
        <Weather position={position} />
      </Card>
      <Card sx={{ margin: "auto", width: "80%" }}>
        <MapInfo position={position} name={name} />
      </Card>
    </div>
  );
};

export default CountryInfo;
