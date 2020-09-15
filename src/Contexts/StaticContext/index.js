import React, { createContext, useState } from "react";
export const StaticContext = createContext();

const StaticContextProvider = (props) => {
  const [contents] = useState({
    title: "Main",

    fisrtLink: "Home",

    secondLink: "Content",

    lastLink: "Pricing",
  });

  const [contents_01] = useState({
    title: "Resources",

    fisrtLink: "Subjects",

    secondLink: "Privacy",

    lastLink: " Tutoring",
  });

  const [contents_02] = useState({
    title: "Community",

    fisrtLink: "Tutors",

    secondLink: "Partners",

    lastLink: "Founders",
  });

  return (
    <StaticContext.Provider value={{ contents, contents_01, contents_02 }}>
      {props.children}
    </StaticContext.Provider>
  );
};

export default StaticContextProvider;
