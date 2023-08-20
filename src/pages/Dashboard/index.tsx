import { Navbar } from "../../component/Navbar";
import "./index.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="menuFrame-container">
        <div className="container">
          <div className="flex">
            <div className="subject-icon"></div>
            <h3>วิชาที่อยู่ในการดูแล</h3>
          </div>
          <div className="flex filter">
            <div className="filterContain">
              <h4>ปีการศึกษา</h4>
              <div className="dropdown">dropdown</div>
            </div>
            <div className="filterContain">
              <h4>เทอม</h4>
              <div className="dropdown">dropdown</div>
            </div>
            <div className="filterContain">
              <h4>ค้นหาจากรหัสหรือชื่อวิชา</h4>
              <div className="dropdown">search</div>
            </div>
          </div>
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th className="centered">รหัสวิชา</th>
                  <th className="centered">Section</th>
                  <th className="leftSide">ชื่อวิชา</th>
                  <th className="leftSide">อาจารย์</th>
                  <th className="centered">สถานะ</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="underline-normal">
                  <td className="centered">261111</td>
                  <td className="centered">001</td>
                  <td className="leftSide">Lorem ipsum dolor sit amet.</td>
                  <td className="leftSide">อาจารย์ 1 (ตัวเอง)</td>
                  <td className="centered">Success</td>
                  <td className="rightSide button">
                    <button className="modify-button">แก้ไข</button>
                    <button className="watchOnly-button">ดู</button>
                  </td>
                </tr>
                <tr className="underline-dark">
                  <td className="centered"></td>
                  <td className="centered">801</td>
                  <td className="leftSide">Lorem ipsum dolor sit amet.</td>
                  <td className="leftSide">อาจารย์ 1 (ตัวเอง)</td>
                  <td className="centered">Success</td>
                  <td className="rightSide">
                    <button className="modify-button">แก้ไข</button>
                    <button className="watchOnly-button">ดู</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
