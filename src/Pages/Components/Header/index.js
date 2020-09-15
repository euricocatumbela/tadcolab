import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { ThemeContext } from "../../../Contexts/ThemeContext/index";
import ToggleTheme from "../ToggleTheme/index";
import ThemeContextProvider from "../../../Contexts/ThemeContext/index";
import classNames from "classnames";
function Header(props) {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);

  // const theme = isLightTheme ? light : dark;
  const [scrolled, setScrolled] = useState();
  const classes = classNames("Header", {
    scrolled: scrolled,
  });
  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes}>
      <div className="HeaderGroup">
        <Link to="/">
          {/* <img src="/Images/tad.svg" alt="" width="44" /> */}
          <strong></strong>TakeAnyDoubt
        </Link>
        <Link to="/academic">Content</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/tutoring">Tutoring</Link>

        <ThemeContextProvider>
          <ToggleTheme />
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default Header;
