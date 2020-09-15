import React, { useContext } from "react";
import styled from "styled-components";
import { StaticContext } from "../../../Contexts/StaticContext/index";
import { Link } from "react-router-dom";
const FooterHero = styled.div`
  background: #f1f3f5;
  margin-top: 150px;

  padding: 50px 0;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const FooterGroup = styled.div`
  margin-left: 220px;
  @media (max-width: 720px) {
    margin-left: 150px;
  }
`;

const FooterText = styled.div``;
const LinkGroup = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 10px 0;
  }

  a {
    color: rgb(122, 65, 246);
    font-weight: 500;
    font-size: 20px;
  }
`;

const Copyright = styled.div`
  margin: 60px 0 0 -420px;
  padding: 0 20px;

  background: linear-gradient(104deg, #050a27 0%, #4a54bc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 18px;
  font-weight: 400;
  max-width: 500px;

  @media (max-width: 740px) {
    margin: 60px 0 0 -100px;
  }
`;

const FooterHeading = styled.p`
  margin: 0px;

  background: linear-gradient(104deg, #050a27 0%, #4a54bc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Bottom = (props) => {
  const { contents } = useContext(StaticContext);
  const { contents_01 } = useContext(StaticContext);
  const { contents_02 } = useContext(StaticContext);

  return (
    <FooterHero>
      <FooterGroup>
        <FooterHeading>
          <FooterText>
            <p>{contents.title}</p>
          </FooterText>
        </FooterHeading>
        <LinkGroup>
          <ul>
            <li>
              <Link>{contents.fisrtLink}</Link>
            </li>
            <li>
              <Link>{contents.secondLink}</Link>
            </li>

            <li>
              <Link>{contents.lastLink}</Link>
            </li>
          </ul>
        </LinkGroup>
      </FooterGroup>
      <FooterGroup>
        <FooterHeading>
          <FooterText>
            <p>{contents_01.title}</p>
          </FooterText>
        </FooterHeading>
        <LinkGroup>
          <ul>
            <li>
              <Link>{contents_01.fisrtLink}</Link>
            </li>
            <li>
              <Link>{contents_01.secondLink}</Link>
            </li>
            <li>
              <Link>{contents_01.lastLink}</Link>
            </li>
          </ul>
        </LinkGroup>
      </FooterGroup>
      <FooterGroup>
        <FooterHeading>
          <FooterText>
            <p>{contents_02.title}</p>
          </FooterText>
        </FooterHeading>
        <LinkGroup>
          <ul>
            <li>
              <Link>{contents_02.fisrtLink}</Link>
            </li>
            <li>
              <Link>{contents_02.secondLink}</Link>
            </li>

            <li>
              <Link>{contents_02.lastLink}</Link>
            </li>
          </ul>
        </LinkGroup>

        <Copyright>
          Backgrounds made in Cinema 4D, iOS app in Swift, site in React.
          <a href="mailto:team@takeAnydoubt.com"> Email us </a>
          to ask anything. Copyright TakeAnyDoubt © 2020
          <Link to="/privacy"> Terms of Service - Privacy Policy </Link>
        </Copyright>
      </FooterGroup>
    </FooterHero>
  );
};

export default Bottom;
