import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { area, region, name, ccn3 } = props.country;

  return (
    <div className="country bg-success">
      <h2>Name: {name.common}</h2>

      <p>Area: {area}</p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;
