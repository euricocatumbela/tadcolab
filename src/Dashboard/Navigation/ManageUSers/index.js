import React from "react";
import SideBar from "../../SideBar/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBarContextProvider from "../../../Contexts/SideBarContext";

const ManageUserHero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ManageDivision = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 120px;
`;
const TextDivision = styled.div`
  h1 {
    position: relative;
    right: 470px;
  }
`;
const DivisionOne = styled.div`
  position: relative;
  left: 500px;
`;
const LinkGroup1 = styled.a`
  cursor: pointer;
`;
const ButtonAdd = styled.button`
  margin-right: 10px;
  margin-left: 30px;
  width: 50px;
  height: 50px;
  border-radius: 90px;
  border-style: solid;
  border-color: white;
  background-color: #00b712;
  color: white;
  cursor: pointer;
`;

const DivisionTwo = styled.div`
  position: relative;
  left: 500px;
`;
const LinkGroup2 = styled.a``;

const DivisionThree = styled.div`
  position: relative;
  left: 500px;
`;
const LinkGroup3 = styled.a``;

const ManageUsers = () => {
  return (
    <ManageUserHero>
      <SideBarContextProvider>
        <SideBar />
      </SideBarContextProvider>

      <TextDivision>
        <h1>User Directory</h1>

        <ManageDivision>
          <DivisionOne>
            <LinkGroup1>
              <Link to="/users">
                <ButtonAdd>+</ButtonAdd>
              </Link>
              Add New User
            </LinkGroup1>
          </DivisionOne>

          <DivisionTwo>
            <LinkGroup2>
              <img width="40" alt="" src="Images/delete.svg" />
              Remove
            </LinkGroup2>
          </DivisionTwo>

          <DivisionThree>
            <LinkGroup3>
              <img width="40" alt="" src="Images/edit.svg" />
              Edit
            </LinkGroup3>
          </DivisionThree>
        </ManageDivision>
      </TextDivision>
    </ManageUserHero>
  );
};

export default ManageUsers;
