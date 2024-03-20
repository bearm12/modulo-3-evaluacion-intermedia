function Filter({ handleChangeCountryValue }) {
  const handleCountryInput = (ev) => {
    handleChangeCountryValue(ev.target.value);
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
    </form>
  );
}

export default Filter;
