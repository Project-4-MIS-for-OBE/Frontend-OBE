import { Navbar } from "../../component/Navbar";
import Table from "../../component/Table";
import useViewModel from "./viewModel";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
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
    navigateToDashBoard,
  } = useViewModel();

  return (
    <div>
      <Navbar />
      <button className="backHomeNav" onClick={navigateToDashBoard}>
        <ArrowBackIosRoundedIcon style={{ color: "#4F79BC", width: "16px" }} />
        <p>ย้อนกลับ</p>
      </button>
      <div className="menuFrame-container top edit">
        <div className="container">
          <div className="topic">
            <div className="flex">
              <img
                src="./src/assets/addeditscore.svg"
                className="addeditscore-icon"
              />
              <h3>Add / Edit Score </h3>
            </div>

            <p>
              กรอกและแก้ไขคะแนนที่จะใช้สำหรับวัดเกณฑ์ CSO จากนั้นบันทึกเป็นไฟล์
              Excel เพื่อนำไปกรอกคะแนนของนักศึกษา{" "}
            </p>
          </div>
          <div className="table1">
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
            <div className="flex">
              <img src="./src/assets/soicon.svg" className="so-icon" />
              <h3>
                วัตถุประสงค์การเรียนรู้ของนักศึกษา (SO : Student outcomes){" "}
              </h3>
            </div>
          </div>
          <div className="container-table2">
            <div className="tableSO">
              <Table Header={HeaderTableSO} Data={dataTableSO}></Table>
            </div>
            <div className="table2">
              <Table
                Header={HeaderTable2}
                Data={dataTable2}
                selectedIcon={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="menuFrame-container bottom edit">
        <div className="container">
          <div className="topic">
            <h3>วัตถุประสงค์รายวิชา (CSO : Course-Specific Outcomes)</h3>
            <p>อัพโหลดไฟล์คะแนนนักศึกษา .xlsx ที่แก้ไขเรียบร้อยแล้ว </p>
          </div>
          <div>
            <div className="table3">
              <Table Header={HeaderTable3} Data={dataTable3}></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUpdateCSO;
