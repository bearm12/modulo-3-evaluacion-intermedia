import Country from "./Country";
import "../scss/components/CountryList.scss";

function CountryList({ countryInfo }) {
  return (
    <div className="countryList">
      {countryInfo.map((country, i) => {
        return <Country countryInfo={country} key={i} />;
      })}
    </div>
  );
}

export default CountryList;
