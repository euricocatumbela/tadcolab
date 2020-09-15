import React from "react";
import styled from "styled-components";

const ReviewListHero = styled.div`
  h2 {
    margin: 50px 20px;
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104deg, #050a27 0%, #4a54bc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ReviewListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 390px 0 390px;

  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 0;
    grid-gap: 20px;
  }
`;

const ReviewListGroup = styled.div`
  width: 425px;
  height: 300px;
  margin: 0px auto;
  padding: auto auto;
  overflow: hidden;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-image: initial;
  border-radius: 20px;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  background-color: rgb(33, 44, 79);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px;

  /* display: grid; */

  img {
    margin: 20px 0 0 10px;
    width: 120px;
    height: 120px;
    border-radius: 90px;
  }

  @media (max-width: 740px) {
    width: 300px;
    height: 225px;

    img {
      width: 50px;
      height: 50px;
    }
  }
`;

const ReviewText = styled.p`
  color: white;
  margin: 10px 0 0 20px;
`;
const ReviewerTextName = styled.h3`
  color: white;
  margin: 10px 0 0 20px;
`;

const ReviewList = () => {
  return (
    <ReviewListHero>
      <h2>What Students say about our tutors </h2>

      <ReviewListCard>
        <ReviewListGroup>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg"
          />
          <ReviewText>Wow what an amazing tutor </ReviewText>
          <ReviewerTextName>Donald Trump</ReviewerTextName>
        </ReviewListGroup>

        <ReviewListGroup>
          <img
            alt=""
            src="https://www.ejctechnology.co.za/images/eurico.jpeg"
          />
          <ReviewText>This Lecture is one of the bests</ReviewText>
          <ReviewerTextName>Eurico Catumbela</ReviewerTextName>
        </ReviewListGroup>
      </ReviewListCard>
    </ReviewListHero>
  );
};

export default ReviewList;
