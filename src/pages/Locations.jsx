import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
const Locations = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const fetchLocations = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setInfo(data.info);
      });
  };
  useEffect(() => {
    fetchLocations("https://rickandmortyapi.com/api/location");
  }, []);
  const goToPage = (id) => {
    fetchLocations(`https://rickandmortyapi.com/api/location/?page=${id}`);
  };

  return (
    <div>
      <Table data={data} />
      <Pagination info={info} goToPage={goToPage} />
    </div>
  );
};
export default Locations;
