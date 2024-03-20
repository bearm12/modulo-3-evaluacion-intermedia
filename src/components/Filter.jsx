function Filter({ handleChangeCountryValue, handleContinentSelectValue }) {
  const handleCountryInput = (ev) => {
    handleChangeCountryValue(ev.target.value);
  };

  const handleContinentInput = (ev) => {
    handleContinentSelectValue(ev.target.value);
  };
  return (
    <form>
      <label htmlFor="country">By Country:</label>
      <input
        type="text"
        name="country"
        id="country"
        placeholder="Spain..."
        onChange={handleCountryInput}
      />
      <label htmlFor="continent">By Continent:</label>
      <select name="contient" id="continent" onChange={handleContinentInput}>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </form>
  );
}

export default Filter;
