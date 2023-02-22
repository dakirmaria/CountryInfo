import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider
} from "@mui/material";
import React from "react";
import useStyle from "./style";

const Filter = ({
  selectedContinent,
  onRadioChange,
  onButtonClicked,
  onSliderChange,
  sizeValue,
  onSearchCountry,
  countrySearch
}) => {
  const classes = useStyle();
  const continents = ["Africa", "Europe", "Asia", "America", "oceania"];

  return (
    <div>
      <div>
        <Slider
          size="small"
          step={10}
          defaultValue={130}
          min={100}
          max={200}
          aria-label="Small"
          valueLabelDisplay="auto"
          value={sizeValue}
          onChange={onSliderChange}
        />
      </div>
      <div>
        <FormControl>
          <RadioGroup
            row
            value={selectedContinent}
            name="controlled-radio-buttons-group"
            onChange={onRadioChange}
          >
            {continents.map((continent) => {
              return (
                <FormControlLabel
                  value={continent}
                  control={<Radio />}
                  label={continent}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Button
          className="search"
          size="medium"
          variant="contained"
          onClick={onButtonClicked}
        >
          Reset Filter
        </Button>
      </div>
    </div>
  );
};
export default Filter;
