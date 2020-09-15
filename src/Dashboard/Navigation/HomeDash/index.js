import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import SideBar from "../../SideBar";
import SideBarContextProvider from "../../../Contexts/SideBarContext/index";

const state = {
  options: {
    colors: ["#14f1d9", "#7b42f6"],
    legend: {
      labels: {
        colors: ["black"],
      },
      position: "top",
    },
    tooltip: {
      theme: "dark",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    chart: {
      id: "takeanydoubt",
    },
    xaxis: {
      type: "datetime",
    },
  },
  series: [
    {
      name: "Active users",
      data: [
        [new Date("January 1, 2020"), 30],
        [new Date("April 14, 2020"), 40],
      ],
    },
    {
      name: "New Users",
      data: [
        [new Date("April 15, 2020"), 80],
        [new Date("August 14, 2020"), 40],
      ],
    },
  ],
};

const HomeStyle = styled.div`
  width: 100%;
  height: 820px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 430px;
`;
const HomeMain = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 380px;
  width: 750px;
  height: 150px;

  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);

  /* border-style: solid; */
  border-radius: 10px;
`;
const VerticalLine1 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  border-right: 6px #00b712 solid;
  height: 110px;

  /* background-color: #00b712; */
  h2 {
    color: white;
  }
  h3 {
    color: white;
  }
  p {
    color: #00b712;
  }
`;
const VerticalLine2 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  border-right: 6px #00b712 solid;
  height: 110px;

  h2 {
    color: white;
  }
  h3 {
    color: white;
  }
  p {
    color: #00b712;
  }
`;
const VerticalLine3 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  border-right: 6px #00b712 solid;
  height: 110px;
  h2 {
    color: white;
  }
  h3 {
    color: white;
  }
  p {
    color: #00b712;
  }
`;
const VerticalLine4 = styled.div`
  margin-top: 10px;
  margin-bottom: 128px;
  margin-left: 30px;
  border-right: 6px #00b712 solid;
  height: 110px;

  h2 {
    color: white;
  }
  h3 {
    color: white;
  }
  p {
    color: #00b712;
  }
`;
const VerticalLine5 = styled.div`
  margin-top: 10px;
  margin-bottom: 128px;
  margin-left: 30px;
  border-right: 6px #00b712 solid;
  height: 110px;

  h2 {
    color: white;
  }
  h3 {
    color: white;
  }
  p {
    color: #00b712;
  }
`;
const VerticalLine6 = styled.div`
  margin-top: 10px;
  margin-bottom: 128px;
  margin-left: 30px;

  h2 {
    color: white;
  }
  h3 {
    color: white;
  }
  p {
    color: #00b712;
  }
`;

const NewGraph = styled.div`
  h1 {
    color: white;
  }
  position: absolute;
  top: 300px;
  left: 520px;
`;
const HomeDash = () => {
  return (
    <HomeStyle>
      <SideBarContextProvider>
        <SideBar />
      </SideBarContextProvider>

      <HomeMain>
        <VerticalLine1>
          <h3>Balance</h3>
          <h2>R500K</h2>
          <p>22%</p>
        </VerticalLine1>
        <VerticalLine2>
          <h3>Students</h3>
          <h2>500</h2>
          <p>10%</p>
        </VerticalLine2>
        <VerticalLine3>
          <h3>Tutors</h3>
          <h2>600</h2>
          <p>9%</p>
        </VerticalLine3>
        <VerticalLine4>
          <h3>Courses</h3>
          <h2>500</h2>
          <p>3%</p>
        </VerticalLine4>
        <VerticalLine5>
          <h3>Level</h3>
          <h2>800</h2>
          <p>3%</p>
        </VerticalLine5>
        <VerticalLine6>
          <h3>Subjects</h3>
          <h2>500</h2>
          <p>3%</p>
        </VerticalLine6>
      </HomeMain>
      <NewGraph>
        <h1>Trafic Overview</h1>
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          width={500}
          height={320}
        />
      </NewGraph>
    </HomeStyle>
  );
};

export default HomeDash;
