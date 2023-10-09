import { Navbar } from "../../component/Navbar";
import Table from "../../component/Table";
import useViewModel from "./viewModel";
import "./index.css";

const EditUpdateCSO = () => {
  const {
    EditScoreData,
    dataTable1,
    dataTable2,
    dataTable3,
    dataTableSO,
    HeaderTable1,
    HeaderTable2,
    HeaderTable3,
    HeaderTableSO,
  } = useViewModel();

  return (
    <div>
      <Navbar />
      <div className="menuFrame-container top edit">
        <div className="container">
          <div className="topic">
            <h3>Add / Edit Score </h3>
            <p>
              กรอกและแก้ไขคะแนนที่จะใช้สำหรับวัดเกณฑ์ CSO จากนั้นบันทึกเป็นไฟล์
              Excel เพื่อนำไปกรอกคะแนนของนักศึกษา{" "}
            </p>
          </div>
          <div className="tableContainer">
            {EditScoreData && <Table Header={HeaderTable1} Data={dataTable1} />}
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
            <div className="tableContainer" style={{ width: "40%" }}>
              <Table Header={HeaderTableSO} Data={dataTableSO}></Table>
            </div>
            <div>
              <h3>กำหนด CSO ให้กับ SO</h3>
              <div className="tableContainer">
                <Table
                  Header={HeaderTable2}
                  Data={dataTable2}
                  selectedIcon={true}
                />
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
              <Table Header={HeaderTable3} Data={dataTable3}></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUpdateCSO;
