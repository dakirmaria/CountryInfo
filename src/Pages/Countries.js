import React, { useState } from "react";
import { fetchCountryData } from "../Util/fetchCountryData";

const Countries = ({ country }) => {
  const [countryList, setCountryList] = useState("");

  const handleSetCountryList = (event) => {
    setCountryList(event);
  };

  if (countryList === "") {
    fetchCountryData("all", "").then((response) => {
      console.log(response);
      handleSetCountryList(response);
    });
  }

  return <div></div>;
};

export default Countries;
