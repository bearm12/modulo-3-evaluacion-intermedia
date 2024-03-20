import "../scss/App.scss";
import Header from "./Header";
import countryData from "../services/data.json";
import CountryList from "./CountryList";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [searchCountryValue, setSearchCountryValue] = useState("");

  const handleSearchCountryValue = (value) => {
    setSearchCountryValue(value);
  };

  const filteredCountries = countryData.filter((countryInfo) => {
    return countryInfo.name.official
      .toLocaleLowerCase()
      .includes(searchCountryValue.toLocaleLowerCase());
  });
  return (
    <>
      <Header />
      <main>
        <Filter handleChangeCountryValue={handleSearchCountryValue} />
        <CountryList countryInfo={filteredCountries} />
      </main>
    </>
  );
}

export default App;
