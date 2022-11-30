function Filters() {
  return (
    <div className="filters-box col-6">
      <form>
        {/* Maximum Distance section */}
        <div className="m-3">
          <label for="maxDistance" className="form-label">
            Maximum Distance:
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="1"
            id="maxDistance"
          ></input>
        </div>
        {/* Price Range section */}
        <div className="m-3">
          <label for="priceRange">Price Range (per golfer):</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">$0-$25</option>
            <option value="2">$25-$50</option>
            <option value="3">$50-$100</option>
            <option value="4">$100+</option>
          </select>
        </div>
        {/* Number of Golfers section */}
        <div className="m-3">
          <label for="numGolfers" className="form-label">
            Number of Golfers:
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        {/* Type of course section */}
        <div className="m-3">
          <label className="form-label">Type of Course:</label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            ></input>
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Par 3
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            ></input>
            <label className="form-check-label" for="flexSwitchCheckDefault">
              9 holes
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            ></input>
            <label className="form-check-label" for="flexSwitchCheckDefault">
              18 holes
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filters;
