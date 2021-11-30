import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-active">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Firs see in</th>
            <th>Status</th>
          </tr>
        </thead>

        {data.map((character, index) => {
          return (
            <tbody key={"char_" + index}>
              <tr>
                <td>
                  <Link to={`/${character.id}`}>{character.id}</Link>
                </td>
                <td>{character.name}</td>
                <td>{character.location.name}</td>
                <td>{character.status}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
