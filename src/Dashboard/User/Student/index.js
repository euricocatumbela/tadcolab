import React from "react";
import contacts from "../../../StaticData/index";

const Student = () => {
  const columns = contacts[0] && Object.keys(contacts[0]);

  return (
    <div>
      <h1 style={{ margin: "0 0 0 520px" }}>User Table </h1>

      <table
        style={{ margin: "0 0 0 520px", border: "solid" }}
        cellPadding={10}
        cellSpacing={8}
      >
        <thead>
          <tr>{contacts[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {contacts.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
