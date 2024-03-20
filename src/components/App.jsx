import "../scss/App.scss";
import Header from "./Header";
import countryData from "../services/data.json";
import CountryList from "./CountryList";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [searchCountryValue, setSearchCountryValue] = useState("");
  const [continentSelect, setContinentSelect] = useState("");

  const handleSearchCountryValue = (value) => {
    setSearchCountryValue(value);
  };

  const handleContinentValue = (value) => {
    setContinentSelect(value);
  };

  const filteredCountries = countryData
    .filter((countryInfo) => {
      return countryInfo.name.official
        .toLowerCase()
        .includes(searchCountryValue.toLowerCase());
    })
    .filter((country) => {
      return continentSelect ? country.continents[0] === continentSelect : true;
    });

  return (
    <>
      <Header />
      <main>
        <Filter
          handleChangeCountryValue={handleSearchCountryValue}
          handleContinentSelectValue={handleContinentValue}
        />
        <CountryList countryInfo={filteredCountries} />
      </main>
    </>
  );
}

export default App;
