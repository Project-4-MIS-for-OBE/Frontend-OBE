import { Navbar } from "../../component/Navbar";

import "./index.css";

const arr = [1, 2, 3, 4, 5, 6];

const EditUpdateCSO = () => {
  return (
    <div>
      <Navbar />
      <div className="menuFrame-container top">
        <div className="container">
          <div className="topic">
            <h3>Add / Edit Score </h3>
            <p>
              กรอกและแก้ไขคะแนนที่จะใช้สำหรับวัดเกณฑ์ CSO จากนั้นบันทึกเป็นไฟล์
              Excel เพื่อนำไปกรอกคะแนนของนักศึกษา{" "}
            </p>
          </div>
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th className="centered">ลำดับ</th>
                  <th className="leftSide headerTableBorder">คำอธิบาย CSO</th>
                  <th className="leftSide headerTableBorder">
                    คะแนนที่ใช้ในการวัดผล CSO
                  </th>
                  <th className="centered headerTableBorder">คะแนนเต็ม</th>
                  <th className="centered">น้ำหนักคะแนน</th>
                </tr>
              </thead>
              <tbody>
                <tr className="underline-normal">
                  <td className="centered tableBorder">1</td>
                  <td className="leftSide tableBorder">
                    Lorem ipsum dolor sit amet.
                  </td>
                  <td
                    className="leftSide tableBorder tablePaddingnone"
                    style={{ padding: "0px" }}
                  >
                    <table>
                      <tr>
                        <td className="subtextColor">คะแนนควิซ1</td>
                      </tr>
                      <div className="lineInTable"></div>
                      <tr>
                        <td className="subtextColor">คะแนนควิซ2</td>
                      </tr>
                    </table>
                  </td>
                  <td
                    className="centered tableBorder"
                    style={{ padding: "0px" }}
                  >
                    <table>
                      <tr>
                        <td className="subtextColor">input</td>
                      </tr>
                      <div className="lineInTable"></div>
                      <tr>
                        <td className="subtextColor">input</td>
                      </tr>
                    </table>
                  </td>
                  <td
                    className="centered tableBorder"
                    style={{ padding: "0px" }}
                  >
                    <table>
                      <tr>
                        <td className="subtextColor">input</td>
                      </tr>
                      <div className="lineInTable"></div>
                      <tr>
                        <td className="subtextColor">input</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="darkbutton">
            <p>บันทึกเป็นไฟล์ .xlsx</p>
          </div>
        </div>
      </div>

      <div className="menuFrame-container">
        <div className="container">
          <div className="topic">
            <h3>วัตถุประสงค์การเรียนรู้ของนักศึกษา (SO : Student outcomes) </h3>
          </div>
          <div style={{ display: "flex" }}>
            <div className="tableContainer" style={{ width: "30%" }}>
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>
                      คำอธิบายวัตถุประสงค์การเรียนรู้ของนักศึกษา (SO : Student
                      outcomes)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((key) => {
                    return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>
                          ความสามารถในการบ่งชี้ ตั้งโจทย์
                          และแก้ปัญหาทางวิศวกรรมที่มีความซับซ้อนโดย
                          ประยุกต์ใช้ความรู้ในทางวิศวกรรมศาสตร์ วิทยาศาสตร์
                          และคณิตศาสตร์
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h3>กำหนด CSO ให้กับ SO</h3>
              <div>
                <table className="tableContainer" style={{ width: "70%" }}>
                  <thead>
                    <tr>
                      <th>ลำดับ</th>
                      <th>คำอธิบาย CSO </th>
                      <th>
                        <table>
                          <tr>
                            <th colSpan={7}>SO (Student outcomes)</th>
                          </tr>
                          <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                          </tr>
                        </table>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((key) => {
                      return key < 3 ? (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>Lorem ipsum dolor sit amet.</td>
                        </tr>
                      ) : (
                        ""
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menuFrame-container bottom">
        <div className="container">
          <div className="topic">
            <h3>วัตถุประสงค์รายวิชา (CSO : Course-Specific Outcomes)</h3>
            <p>อัพโหลดไฟล์คะแนนนักศึกษา .xlsx ที่แก้ไขเรียบร้อยแล้ว </p>
          </div>
          <div>
            <div className="tableContainer">
              <table>
                <thead>
                  <tr>
                    <th className="centered">ลำดับ</th>
                    <th className="leftSide headerTableBorder">คำอธิบาย CSO</th>
                    <th className="leftSide headerTableBorder">
                      คะแนนที่ใช้ในการวัดผล CSO
                    </th>
                    <th className="centered headerTableBorder">0</th>
                    <th className="centered headerTableBorder">1</th>
                    <th className="centered headerTableBorder">2</th>
                    <th className="centered headerTableBorder">3</th>
                    <th className="centered headerTableBorder">4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="underline-normal">
                    <td className="centered tableBorder">1</td>
                    <td className="leftSide tableBorder">
                      Lorem ipsum dolor sit amet.
                    </td>
                    <td
                      className="leftSide tableBorder tablePaddingnone"
                      style={{ padding: "0px" }}
                    >
                      <table>
                        <tr>
                          <td className="subtextColor">คะแนนควิซ1</td>
                        </tr>
                        <div className="lineInTable"></div>
                        <tr>
                          <td className="subtextColor">คะแนนควิซ2</td>
                        </tr>
                      </table>
                    </td>
                    <td
                      className="centered tableBorder"
                      style={{ padding: "0px" }}
                    >
                      <table>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                        <div className="lineInTable"></div>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                      </table>
                    </td>
                    <td
                      className="centered tableBorder"
                      style={{ padding: "0px" }}
                    >
                      <table>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                        <div className="lineInTable"></div>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                      </table>
                    </td>
                    <td
                      className="centered tableBorder"
                      style={{ padding: "0px" }}
                    >
                      <table>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                        <div className="lineInTable"></div>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                      </table>
                    </td>
                    <td
                      className="centered tableBorder"
                      style={{ padding: "0px" }}
                    >
                      <table>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                        <div className="lineInTable"></div>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                      </table>
                    </td>
                    <td
                      className="centered tableBorder"
                      style={{ padding: "0px" }}
                    >
                      <table>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                        <div className="lineInTable"></div>
                        <tr>
                          <td className="subtextColor">input</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUpdateCSO;
