import React, { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarContextProvider = (props) => {
  const [studentDash] = useState({
    title: "MyClassroom",
    home: "Home",
    subject: "Subject",
    signout: "Signout",
  });

  const [tutorDash] = useState({
    title: "MyDashboard",
    home: "Home",
    content: "Content",
    classroom: "Classroom",
  });

  const [adminDash] = useState({
    title: "Dashboard",
    overview: "Overview",
    student: "Student",
    tutor: "Tutor",
    course: "Course",
    manage: "Manage",
    signout: "Signout",
  });

  return (
    <SideBarContext.Provider value={{ studentDash, tutorDash, adminDash }}>
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
