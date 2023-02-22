import axios from "axios";
import { apiURL } from "./api";

const getData = async (regionName) => {
  if (regionName === "") {
    let myResult = await axios(`${apiURL}/all`);
    myResult = myResult.data;
    let countries = [];
    countries = myResult.map((c) => {
      return c.population
        ? {
            name: c.name["common"],
            flag: c.flags["png"],
            population: c.population,
            language: c.languages,
            latlng: c.latlng
          }
        : {
            name: c.name.common,
            flag: c.flags["png"],
            population: "No data",
            language: c.languages,
            latlng: c.latlng
          };
    });
    return countries;
  } else {
    try {
      let myResult = await axios(`${apiURL}/region/${regionName}`);
      myResult = myResult.data;
      var countries = [];
      countries = myResult.map((c) => {
        return c.population
          ? {
              name: c.name["common"],
              flag: c.flags["png"],
              population: c.population,
              language: c.languages,
              latlng: c.latlng
            }
          : {
              name: c.name.common,
              flag: c.flags["png"],
              population: "No data",
              language: c.languages,
              latlng: c.latlng
            };
      });
      return countries;
    } catch (e) {
      console.log(e);
    }
  }
};
export default getData;
