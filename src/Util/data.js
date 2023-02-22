import { apiURL } from "./api";
async function getData(regionName) {
  console.log("regionName: ", regionName);
  if (regionName === "") {
    try {
      const myResults = await fetch(`${apiURL}/all`)
        .then((res) => res.json())
        .then((data) => {
          var countries = [];
          countries = data.map((c) => {
            return c.population
              ? {
                  name: c.name.common,
                  region: c.region,
                  flag: c.flags["png"],
                  population: c.population
                }
              : {
                  name: c.name.common,
                  region: c.region,
                  flag: c.flags["png"],
                  population: "No data"
                };
          });
          return countries;
        });

      return myResults;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      return await fetch(`${apiURL}/region/${regionName}`)
        .then((res) => res.json())
        .then((data) => {
          return data.map((c) => {
            return c.population
              ? {
                  name: c.name.common,
                  region: c.region,
                  flag: c.flags["png"],
                  population: c.population
                }
              : {
                  name: c.name.common,
                  region: c.region,
                  flag: c.flags["png"],
                  population: "No data"
                };
          });
        });
    } catch (error) {
      try {
        return await fetch(`${apiURL}/name/${regionName}`)
          .then((res) => res.json())
          .then((data) => {
            return data.map((c) => {
              return c.population
                ? {
                    name: c.name.common,
                    region: c.region,
                    flag: c.flags["png"],
                    population: c.population
                  }
                : {
                    name: c.name.common,
                    region: c.region,
                    flag: c.flags["png"],
                    population: "No data"
                  };
            });
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

const getData2 = async (regionName) => {
  var data = await fetch(`${apiURL}/all`);
  return data.json();
};
// async function getData2() {

// }
export default getData;
