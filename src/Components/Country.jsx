import React from "react";

const Country = (props) => {
  const { area, region, name } = props.country;

  return (
    <div style={{ backgroundColor: "#C2FBC9" }}>
      <div className="ps-2 pt-2">
        <h4>Name : {name.common}</h4>
        <p className="fw-semibold">
          {" "}
          Area : <span className="fw-normal">{area} km²</span>
        </p>
        <p className="fw-semibold pb-3">
          Region : <span className="fw-normal ">{region}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
