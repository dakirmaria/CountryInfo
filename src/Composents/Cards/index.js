import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const Cards = (props) => {
  const navigate = useNavigate();

  console.log("the size of the card is ", props.cardSize);

  if (props.countries) {
    return (
      <div>
        <Grid
          container
          spacing={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
          margin="auto"
          padding="auto"
        >
          {props["countries"].map((e) => (
            <Card sx={{ maxWidth: 345, margin: 5 }}>
              <CardActionArea
                onClick={(event) => {
                  navigate("/country-info", {
                    state: { e }
                  });
                }}
              >
                <CardMedia
                  component="img"
                  image={e.flag}
                  alt={e.name}
                  width="345px"
                  height={props.cardSize}
                  margin="12px"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"Population : " + e.population}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </div>
    );
  }
};
export default Cards;
