import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <div className="bg-info">
        <h1 className="text-left bg-success ">Countries Information</h1>
      </div>
      <div className="d-flex   justify-content-between">
        <div className="d-flex justify-content-start gap-3">
          <Button>Assending</Button>
          <Button>filtering</Button>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
