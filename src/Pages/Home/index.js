import React from "react";
import Header from "../Components/Header/index";
// import Card from "../Components/Card/index";
import Element from "../Components/Element/index";

import ThemeContextProvider from "../../Contexts/ThemeContext/index";
import StaticContextProvider from "../../Contexts/StaticContext/index";
import Bottom from "../Components/Bottom/index";
import Session from "../Components/Session";
import ReviewList from "../Components/ReviewList";

function Home() {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Get better grades.</h1>
          <p>Instant Online tutoring</p>

          <input
            label="search content"
            placeholder="What subject do you need help with?(e.g. 'Calculs') "
          />

          <img
            width="50"
            alt=""
            src="https://img.icons8.com/fluent/48/000000/search.png"
          />
        </div>
      </div>
      <div className="Elements">
        <h2>How does TakeAnyDoubt works?</h2>
        <div className="ElementGroup">
          <Element
            title="1. Make a request"
            description=""
            //   description=" Tell us what you need help with and our
            // smart matching system will connect you
            // with an online tutor. Sign up for a free trial using a debit/credit card."
            image="https://static.dribbble.com/users/1908682/screenshots/4817915/______-___-________3.jpg"
          />
          <Element
            title="2. Learn"
            description=""
            //   description=" Get live 1-on-1 help in our advanced
            // lesson space. Use a video chat, screen sharing, text
            // editor and much more."
            image="https://static.dribbble.com/users/81451/screenshots/6463636/illustration---n2.png"
          />
          <Element
            title="3. Review"
            description=""
            //   description=" After the lesson is completed, both the
            // tutor and student have the opportunity to
            // rate each other, maintaining the quality of
            // our community."
            image="https://static.dribbble.com/users/142973/screenshots/9875511/media/9fe204959d18d53462629c682ea89c14.png"
          />
        </div>
      </div>
      <Session />
      <ReviewList />
      <StaticContextProvider>
        <Bottom />
      </StaticContextProvider>
    </div>
  );
}

export default Home;
