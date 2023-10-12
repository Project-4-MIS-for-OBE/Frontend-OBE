import { Navbar } from "../../component/Navbar";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "./index.css";
import useViewModel from "./viewModel";

const ConcludeError = () => {
  const { navigateToDashBoard } = useViewModel();
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
            <img
              src="./src/assets/errornodata.svg"
              className="errornodata"
              alt="errornodata"
            />
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
          <h6 className="so-2">
            สรุปคะแนนประเมินวัตถุประสงค์การเรียนรู้ของนักศึกษา (SO){" "}
          </h6>
        </div>
        <div className="tableContainer">
          <img
            src="./src/assets/errornodata.svg"
            className="errornodata"
            alt="errornodata"
          />
        </div>
      </div>
    </div>
  );
};

export default ConcludeError;
