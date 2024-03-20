import Country from "./Country";
import "../scss/components/CountryList.scss";

function CountryList({ countryInfo }) {
  return (
    <div className="countryList">
      {countryInfo.map((countryInfo, i) => {
        return <Country countryInfo={countryInfo} key={i} />;
      })}
    </div>
  );
}

export default CountryList;
