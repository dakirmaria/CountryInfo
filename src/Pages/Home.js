import React, { useEffect, useState } from "react";
import Filter from "../Composents/Filter";
import Countries from "../Composents/Countries";
import getData from "../Util/dataAxios";

const Home = () => {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [countries, setCountries] = useState("");
  const [sizeValue, setSizeValue] = useState(130);

  const handleSelectedCountryChange = async (event) => {
    setSelectedContinent(event.target.value);
    setCountries(await getData(event.target.value));
  };

  useEffect(() => {
    const countriesData = getData("");

    countriesData.then((data) => {
      setCountries(data);
    });
  }, []);

  const handleButton = async () => {
    setSelectedContinent("");
    setCountries(await getData(""));
  };
  const handleSliderChange = (event) => {
    setSizeValue(event.target.value);
  };

  return (
    <div>
      <Filter
        selectedContinent={selectedContinent}
        onRadioChange={handleSelectedCountryChange}
        onButtonClicked={handleButton}
        onSliderChange={handleSliderChange}
        sizeValue={sizeValue}
      />

      <div>
        <Countries countries={countries} cardSize={sizeValue} />
      </div>
    </div>
  );
};

export default Home;
