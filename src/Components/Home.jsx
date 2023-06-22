import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Country from "./Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  console.log(countries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleFilter = () => {
    if (filterActive) {
      setFilteredCountries([]);
      setFilterActive(false);
    } else {
      const filtered = countries.filter(
        (country) =>
          country.area <
            countries.find((c) => c.name.common === "Lithuania").area &&
          country.region === "Oceania"
      );
      setFilteredCountries(filtered);
      setFilterActive(true);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const sortedCountries = countries.sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.name.common.localeCompare(b.name.common);
    } else {
      return b.name.common.localeCompare(a.name.common);
    }
  });

  const countryList = filterActive ? filteredCountries : sortedCountries;

  return (
    <div style={{ backgroundColor: "#DFFFE3" }}>
      <div className="p-4">
        <h1 className="text-left pb-2">Countries Information</h1>

        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start gap-3">
            <Button
              className="border border-0 mb-3"
              style={{ backgroundColor: "#5AEF6D" }}
              onClick={() => handleSort("ascending")}
            >
              Ascending
            </Button>
            <Button
              className="border border-0 mb-3"
              style={{ backgroundColor: "#5AEF6D" }}
              onClick={() => handleSort("descending")}
            >
              Descending
            </Button>
          </div>
          <div>
            <Button
              className="border border-0 mb-3"
              style={{ backgroundColor: "#5AEF6D" }}
              onClick={handleFilter}
            >
              {filterActive ? "Clear Filter" : "Filter"}
            </Button>
          </div>
        </div>
        <div>
          {countryList.map((country) => (
            <Country country={country} key={country.ccn3}></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
