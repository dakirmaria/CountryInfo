import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FlagIcon from "@mui/icons-material/Flag";
import PeopleIcon from "@mui/icons-material/People";
import LanguageIcon from "@mui/icons-material/Language";
import Typography from "@mui/material/Typography";
import Weather from "../Weather";

const InfoCard = ({ state }) => {
  return (
    <div>
      <Card
        sx={{ display: "flex", width: "80%", margin: "auto", marginBottom: 3 }}
      >
        <CardMedia
          component="img"
          sx={{ width: 350 }}
          image={state.e["flag"]}
          alt="flag of country"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {state.e["name"]}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <PeopleIcon color="black" /> {state.e["population"]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <FlagIcon color="black" /> {state.e["flag"]}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <LanguageIcon color="black" />
              1st language: {Object.values(state.e["language"])}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};
export default InfoCard;
