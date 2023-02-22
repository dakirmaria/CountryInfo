import React from "react";
import Cards from "../Cards";
const Countries = (props) => {
  return (
    <div>
      <Cards countries={props.countries} cardSize={props.cardSize} />
    </div>
  );
};
export default Countries;
