import React, { useState } from "react";
import { Navbar } from "../../component/Navbar";
import { DoughnutChart } from "../../component/Doughnut";
import Table from "../../component/Table";
import useViewModel from "./viewModel";
import "./index.css";

const ConcludeInstructor: React.FC = () => {
  const [isChartVisible, setChartVisible] = useState(true);

  const toggleChartVisibility = () => {
    setChartVisible(!isChartVisible);
  };

  const { EditScoreData, dataTable1, HeaderTableConclude } = useViewModel();

  return (
    <div>
      <Navbar />
      <div className="menuFrame-container top">
        <div className="container-2">
          <h3>วิชา FullStack Development รหัสวิชา 26x497</h3>
          <div className="topic-3">
            <h6>ปีการศึกษา ภาคเรียนที่ </h6>
            <h6>จำนวนนักศึกษาที่ลงทะเบียนเรียน :</h6>
          </div>
          <div className="flex">
            <img
              src="./src/assets/conclude.svg"
              className="conclude-icon"
              alt="conclude"
            />
            <h6>สรุปคะแนนประเมินวัตถุประสงค์รายวิชา (CSO) </h6>
          </div>
          <div className="tableContainer">
            {EditScoreData && (
              <Table Header={HeaderTableConclude} Data={dataTable1} />
            )}
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
        <div className="flex">
          <img
            src="./src/assets/conclude.svg"
            className="conclude-icon"
            alt="conclude"
          />
          <h6>สรุปคะแนนประเมินวัตถุประสงค์การเรียนรู้ของนักศึกษา (SO) </h6>
        </div>
      </div>
    </div>
  );
};

export default ConcludeInstructor;
