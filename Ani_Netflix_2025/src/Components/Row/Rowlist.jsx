import React from "react";
import "./Row.css";
import Row from "./Row";
import request from "../../utils/requsts";
import fetchdata from "../../utils/fetchData";
function Rowlist() {
  return (
    <>
      <section className="movies-container">
        {fetchdata?.map((properties, index) => (
          <>
            <Row
              title={properties.title}
              fetchURL={properties.fetchURL}
              isSmall={properties.isSmall}
              Key={index}
            />
          </>
        ))}
      </section>
    </>
  );
}

export default Rowlist;
