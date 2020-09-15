import React from "react";
import MaterialTable from "material-table";
export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      {
        id: "1",
        title: "FirstName",
        field: "firstName",
      },
      {
        title: "LastName",
        field: "lastName",
      },
      {
        title: "Email",
        field: "emailAddress",
      },
      {
        title: "PhoneNumber",
        field: "phoneNumber",
      },
      {
        title: "address",
        field: "address",
      },
      {
        title: "City",
        field: "city",
      },
      {
        title: "State",
        field: "state",
      },
      {
        title: "PostalCode",
        field: "postCode",
      },
    ],

    data: [
      {
        id: 1,
        firstName: "Eurico",
        lastName: "Catumbela",
        emailAddress: "erick@ejctechnology.co.za",
        phoneNumber: "0622575680",
        address: "16 Cheviot",
        city: "Cape Town",
        state: "Western Cape",
        postCode: "8000",
      },
      {
        id: 2,
        firstName: "Wilson",
        lastName: "Catumbela",
        emailAddress: "wilson@ejctechnology.co.za",
        phoneNumber: "931543419",
        address: "Tundavala",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 3,
        firstName: "Valentim",
        lastName: "Catumbela",
        emailAddress: "valentin@ejctechnology.co.za",
        phoneNumber: "924922672",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 4,
        firstName: "Edilson",
        lastName: "Catumbela",
        emailAddress: "edilson@ejctechnology.co.za",
        phoneNumber: "937435527",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 5,
        firstName: "Abednego",
        lastName: "Catumbela",
        emailAddress: "Abednego@ejctechnology.co.za",
        phoneNumber: "925423854",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 6,
        firstName: "Agustinho",
        lastName: "Nangolo",
        emailAddress: "agustinho@ejctechnology.co.za",
        phoneNumber: "933108123",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 7,
        firstName: "Marciana",
        lastName: "Tchipela",
        emailAddress: "marciana@ejctechnology.co.za",
        phoneNumber: "926199227",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 8,
        firstName: "Marcia",
        lastName: "Catumbela",
        emailAddress: "marcia@ejctechnology.co.za",
        phoneNumber: "931543419",
        address: "Tundavala",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 8,
        firstName: "Marcia",
        lastName: "Catumbela",
        emailAddress: "marcia@ejctechnology.co.za",
        phoneNumber: "931543419",
        address: "Tundavala",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
    ],
  });

  return (
    <MaterialTable
      title="User Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
