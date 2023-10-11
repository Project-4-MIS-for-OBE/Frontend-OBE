import { Navbar } from "../../component/Navbar";
import { Chart } from "../../component/RadarChart";
import "./index.css";

const StudentPage = () => {
  return (
    <div>
      <Navbar />
      <div className="menuFrame-container top">
        <div className="container-2">
          <h3>สรุปผลคะแนนประเมินวัตถุประสงค์การเรียนรู้ (SO)</h3>
          <div className="topic-2">
            <h3>ปีการศึกษา</h3> <h4>2565</h4>
            <h3>ภาคเรียนที่ </h3> <h4>2</h4>
          </div>

          <div className="flex">
            <img src="./src/assets/conclude.svg" className="conclude-icon" />
            <h6>สรุปคะแนนประเมินวัตถุประสงค์การเรียนรูั (SO) รวมทุกวิชา </h6>
          </div>

          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th className="centered">ลำดับ</th>
                  <th className="leftSide headerTableBorder">
                    คำอธิบายวัตถุประสงค์การเรียนรู้ของนักศึกษา (SO : Student
                    Outcomes)
                  </th>

                  <th className="centered">ผลการประเมิน</th>
                </tr>
              </thead>
              <tbody>
                <tr className="underline-normal"></tr>
              </tbody>
            </table>
            <div className="chart">
              <Chart />
            </div>
          </div>
        </div>
        <div className="container">
          <h6>สรุปคะแนนประเมินวัตถุประสงค์การเรียนรูั (SO) รวมทุกวิชา </h6>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
