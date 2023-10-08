import { Navbar } from "../../component/Navbar";
import { Chart } from "../../component/RadarChart";
import "./index.css";

const StudentPage = () => {
  return (
    <div>
      <Navbar />
      <div className="menuFrame-container top">
        <div className="container">
          <h3>สรุปผลคะแนนประเมินวัตถุประสงค์การเรียนรู้ (SO)</h3>
          <div className="topic">
            <h3>ปีการศึกษา</h3> <h4>2565</h4>
            <h3>ภาคเรียนที่ </h3> <h4>2</h4>
          </div>
          <p>สรุปคะแนนประเมินวัตถุประสงค์การเรียนรูั (SO) รวมทุกวิชา </p>

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
          <p>สรุปคะแนนประเมินวัตถุประสงค์การเรียนรูั (SO) รวมทุกวิชา </p>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
