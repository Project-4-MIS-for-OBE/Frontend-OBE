import React, { useState } from "react";
import { Navbar } from "../../component/Navbar";
import { DoughnutChart } from "../../component/Doughnut";

import useViewModel from "./viewModel";
import Table from "../../component/Table";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "./index.css";

const ConcludeInstructor: React.FC = () => {
  const [isChartVisible, setChartVisible] = useState(true);
  const {
    dataTable1,
    dataTableSO,
    HeaderTable1,
    HeaderTableSO,
    navigateToDashBoard,
  } = useViewModel();
  const toggleChartVisibility = () => {
    setChartVisible(!isChartVisible);
  };

  return (
    <div>
      <Navbar />
      <button className="backHomeNav" onClick={navigateToDashBoard}>
        <ArrowBackIosRoundedIcon style={{ color: "#4F79BC", width: "16px" }} />
        <p>ย้อนกลับ</p>
      </button>
      <div className="menuFrame-container top">
        <div className="container-2">
          <h3>วิชา FullStack Development รหัสวิชา 26x497</h3>
          <div className="topic-3">
            <h6>ปีการศึกษา ภาคเรียนที่ 25xx</h6>
            <h6>จำนวนนักศึกษาที่ลงทะเบียนเรียน : x</h6>
          </div>
          <div>
            <div className="flex">
              <img
                src="./src/assets/conclude.svg"
                className="conclude-icon"
                alt="conclude"
              />
              <h6>สรุปคะแนนประเมินวัตถุประสงค์รายวิชา (CSO) </h6>
            </div>
            <div className="instructorConclude table1">
              <Table Header={HeaderTable1} Data={dataTable1} />
            </div>
          </div>
          <div className="toggleconcludeChart" onClick={toggleChartVisibility}>
            <h6>แผนภาพสรุปผลการประเมินและจำนวนนักศึกษา</h6>
          </div>
          <div
            className="concludeChart"
            style={{ display: isChartVisible ? "block" : "none" }}
          >
            {isChartVisible && (
              <>
                <div className="CSOnamechart">
                  <div className="CSO">
                    <h4>CSO1 </h4>
                  </div>
                  <p>cso 1 name</p>
                </div>

                <div className="DoughnutChart">
                  <DoughnutChart />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container-2">
        <div>
          <div className="flex">
            <img
              src="./src/assets/conclude.svg"
              className="conclude-icon"
              alt="conclude"
            />
            <h6>สรุปคะแนนประเมินวัตถุประสงค์การเรียนรู้ของนักศึกษา (SO) </h6>
          </div>
          <div>
            <Table Header={HeaderTableSO} Data={dataTableSO} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcludeInstructor;
