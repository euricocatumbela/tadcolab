import React from "react";

import styled from "styled-components";

const SessionHero = styled.div`
  display: grid;
`;
const SessionGroup = styled.div`
  margin: 20px 0;

  h2 {
    padding: 20px 0px 0px;
    font-size: 32px;
    line-height: 120%;
    text-align: center;
    color: black;
  }

  p {
    text-align: center;

    /* color: black; */
    font-size: 20px;
    /* line-height: 140%; */
    line-height: 22px;
    font-weight: 400px;
    color: rgb(74, 74, 74);

    /* text-align: left; */
  }
  img {
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 420px;
    width: 40%;
    border-radius: 14px;
    box-sizing: border-box;
    /* overflow: hidden; */
  }
`;
const Text = styled.h2`
  margin: 50px 20px;
  font-size: 26px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg, #050a27 0%, #4a54bc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
// const Button = styled.button``;

const Session = () => {
  return (
    <SessionHero>
      <Text>Why use TakeAnyDoubt?</Text>
      <SessionGroup>
        <h2>On-demand tutoring </h2>
        <p>
          Connect with an online tutor in less than 30 seconds, 24/7. It doesn’t
          matter if you want help with a single problem or you need a 3-hour
          lesson.
        </p>
        <img
          alt=""
          src="https://static.dribbble.com/users/1741046/screenshots/6787658/teachers-guide-to-financial-success.dribble.1a.gif"
        />
        <h2> All the tools you need </h2>
        <p>
          Our lesson space features a virtual whiteboard, text editor,
          audio/video chat, screensharing and so much more. All lessons are
          archived for your convenience. Get help in any subject We cover over
          300 subjects across all grade levels. Whether it’s high school algebra
          or college-level
        </p>
        <img
          alt=""
          src="https://static.dribbble.com/users/992274/screenshots/6796969/selection_from_options_kit8-net.png"
        />
        <h2> Learn from the best tutors</h2>
        <p>
          Highly qualified <strong>tutors</strong> from the best{" "}
          <strong>universities</strong> across the globe ready to help. An
          acceptance rate of 4% means all our tutors are thoroughly screened.
        </p>
        <img
          alt=""
          src="https://static.dribbble.com/users/310943/screenshots/4202081/zremote-team-collaboration-illustration.png"
        />
        <h2>Get help in any subject</h2>
        <p>
          We cover over 300 subjects across all grade levels. Whether it’s high
          school algebra or college-level Spanish, we have a tutor that can
          help.
        </p>
        <img
          alt=""
          src="https://static.dribbble.com/users/938871/screenshots/3827313/subject_family.png"
        />
        {/* <Button></Button> */}
      </SessionGroup>
    </SessionHero>
  );
};

export default Session;
