import "../scss/components/Country.scss";

function Country({ countryInfo }) {
  return (
    <div className="country">
      <p className="country__flag">{countryInfo.flag}</p>
      <h4 className="country__name">{countryInfo.name.official}</h4>
      <p className="country__capital">{countryInfo.capital[0]}</p>
      <p className="country__continent">{countryInfo.continents[0]}</p>
    </div>
  );
}

export default Country;
