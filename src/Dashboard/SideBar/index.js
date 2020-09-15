import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SideBarContext } from "../../Contexts/SideBarContext";

const SideBarHero = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 300px;
  position: fixed;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  overflow: hidden;
`;
const SideBarMeno = styled.div`
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 64px;
`;
const UlList = styled.ul`
  position: relative;
  right: 80px;
  height: 100%;
  width: 130%;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);

  list-style: none;
`;
const LiElement1 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;

    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  }
`;

const LiElement2 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;

    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  }
`;
const LiElement3 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;

    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  }
`;

const LiElement4 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;

    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  }
`;
const LiElement5 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;

    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  }
`;
const LiElement6 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;

    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  }
`;
const Link1 = styled.a`
  color: white;

  img {
    position: fixed;
    left: 40px;
    bottom: 695px;
  }

  @media (max-width: 640px) {
    img {
      left: 40px;
      top: 100px;
    }
  }
`;
const Link2 = styled.a`
  color: white;
  img {
    position: fixed;
    left: 40px;
    bottom: 628px;
  }
  @media (max-width: 640px) {
    img {
      left: 40px;
      top: 160px;
    }
  }
`;
const Link3 = styled.a`
  color: white;
  img {
    position: fixed;
    left: 40px;
    bottom: 564px;
  }
  @media (max-width: 640px) {
    img {
      left: 40px;
      top: 230px;
    }
  }
`;
const Link4 = styled.a`
  color: white;
  img {
    position: fixed;
    left: 40px;
    bottom: 500px;
  }
  @media (max-width: 640px) {
    img {
      left: 40px;
      top: 297px;
    }
  }
`;
const Link5 = styled.a`
  color: white;
  img {
    position: fixed;
    left: 40px;
    bottom: 435px;
  }
  @media (max-width: 640px) {
    img {
      left: 40px;
      top: 360px;
    }
  }
`;
const Link6 = styled.a`
  color: white;
  img {
    position: fixed;
    left: 40px;
    bottom: 367px;
  }
  @media (max-width: 640px) {
    img {
      left: 40px;
      top: 430px;
    }
  }
`;

const SideBar = (props) => {
  const { adminDash } = useContext(SideBarContext);
  return (
    <SideBarHero>
      <SideBarMeno>{adminDash.title}</SideBarMeno>
      <UlList>
        <Link to="/homedash">
          <LiElement1>
            <Link1>
              <img alt="dashboard" width="30" src="/Images/dashboard.svg" />
              {adminDash.overview}
            </Link1>
          </LiElement1>
        </Link>

        <Link to="/users">
          <LiElement2>
            <Link2>
              <img alt="student" width="30" src="/Images/student.svg" />
              {adminDash.student}
            </Link2>
          </LiElement2>
        </Link>
        <Link>
          <LiElement3>
            <Link3>
              <img alt="totor" width="30" src="/Images/tutor.svg" />
              {adminDash.tutor}
            </Link3>
          </LiElement3>
        </Link>
        <Link>
          <LiElement4>
            <Link4>
              <img alt="training" width="30" src="/Images/training.svg" />
              {adminDash.course}
            </Link4>
          </LiElement4>
        </Link>
        <Link>
          <LiElement5>
            <Link5>
              <img alt="project" width="30" src="/Images/project.svg" />
              {adminDash.manage}
            </Link5>
          </LiElement5>
        </Link>
        <Link>
          <LiElement6>
            <Link6>
              <img alt="logout" width="30" src="/Images/logout.svg" />
              {adminDash.signout}
            </Link6>
          </LiElement6>
        </Link>
      </UlList>
    </SideBarHero>
  );
};

export default SideBar;
