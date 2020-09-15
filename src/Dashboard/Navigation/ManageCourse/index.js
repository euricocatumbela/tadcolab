import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ManageCourseHero = styled.div`
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
  right: 500px;
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
  right: 500px;
`;
const LinkGroup2 = styled.a``;

const DivisionThree = styled.div`
  position: relative;
  right: 500px;
`;
const LinkGroup3 = styled.a``;

const ManageCourse = () => {
  return (
    <ManageCourseHero>
      <TextDivision>
        <h1>Course Directory</h1>

        <ManageDivision>
          <DivisionOne>
            <LinkGroup1>
              <Link to="/users">
                <ButtonAdd>+</ButtonAdd>
              </Link>
              Add New Course
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
    </ManageCourseHero>
  );
};

export default ManageCourse;
