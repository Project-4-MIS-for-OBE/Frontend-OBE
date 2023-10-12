import { Navbar } from "../../component/Navbar";
import Table from "../../component/Table";
import useViewModel from "./viewModel";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ExcelBtn from "../../component/UploadExcel";
import "./index.css";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Dropzone from "react-dropzone";
import { useState } from "react";
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
    navigateToConcludeInstructor,
    navigateToDashBoard,
  } = useViewModel();
  const [fileDropped, setFileDropped] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleAcceptedFiles = (acceptedFiles: any) => {
    setFileDropped(true);
    setFileName(acceptedFiles[0].name); // Assuming you want the name of the first file if multiple are dropped
  };
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
            <ExcelBtn />
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
            <Dropzone onDrop={handleAcceptedFiles}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    className={
                      fileDropped
                        ? "DragDropZone accept"
                        : "DragDropZone notAccept"
                    }
                  >
                    <input {...getInputProps()} />
                    {fileDropped ? (
                      <div className="acceptfile">
                        <InsertDriveFileOutlinedIcon />
                        <p>File accepted: {fileName}</p>
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                        >
                          <path
                            d="M17.2091 15.7402C17.1842 15.7085 17.1525 15.6828 17.1162 15.6651C17.08 15.6475 17.0402 15.6383 16.9999 15.6383C16.9596 15.6383 16.9198 15.6475 16.8836 15.6651C16.8473 15.6828 16.8156 15.7085 16.7907 15.7402L13.072 20.4451C13.0413 20.4843 13.0223 20.5312 13.0171 20.5807C13.0119 20.6301 13.0207 20.6801 13.0425 20.7247C13.0643 20.7694 13.0983 20.8071 13.1405 20.8334C13.1827 20.8596 13.2314 20.8735 13.2812 20.8734H15.7349V28.9219C15.7349 29.068 15.8544 29.1875 16.0005 29.1875H17.9927C18.1388 29.1875 18.2583 29.068 18.2583 28.9219V20.8767H20.7187C20.9411 20.8767 21.064 20.6211 20.9278 20.4484L17.2091 15.7402Z"
                            fill="black"
                          />
                          <path
                            d="M26.941 12.6756C25.4203 8.66465 21.5455 5.8125 17.0066 5.8125C12.4678 5.8125 8.59297 8.66133 7.07227 12.6723C4.22676 13.4193 2.125 16.0125 2.125 19.0938C2.125 22.7627 5.09668 25.7344 8.7623 25.7344H10.0938C10.2398 25.7344 10.3594 25.6148 10.3594 25.4688V23.4766C10.3594 23.3305 10.2398 23.2109 10.0938 23.2109H8.7623C7.64336 23.2109 6.59082 22.766 5.80723 21.9592C5.02695 21.1557 4.61191 20.0732 4.64844 18.951C4.67832 18.0744 4.97715 17.251 5.51836 16.557C6.07285 15.8498 6.8498 15.3352 7.71309 15.1061L8.97148 14.7773L9.43301 13.5621C9.71855 12.8051 10.117 12.0979 10.6184 11.457C11.1133 10.8219 11.6996 10.2635 12.3582 9.8002C13.7229 8.84063 15.3299 8.33262 17.0066 8.33262C18.6834 8.33262 20.2904 8.84063 21.6551 9.8002C22.3158 10.265 22.9002 10.8229 23.3949 11.457C23.8963 12.0979 24.2947 12.8084 24.5803 13.5621L25.0385 14.774L26.2936 15.1061C28.0932 15.5908 29.3516 17.2277 29.3516 19.0938C29.3516 20.1928 28.9232 21.2287 28.1463 22.0057C27.7653 22.3889 27.312 22.6928 26.8127 22.8997C26.3135 23.1066 25.7781 23.2124 25.2377 23.2109H23.9062C23.7602 23.2109 23.6406 23.3305 23.6406 23.4766V25.4688C23.6406 25.6148 23.7602 25.7344 23.9062 25.7344H25.2377C28.9033 25.7344 31.875 22.7627 31.875 19.0938C31.875 16.0158 29.7799 13.426 26.941 12.6756Z"
                            fill="black"
                          />
                        </svg>{" "}
                        <p>Drag and Drop here</p>
                        <p>or</p>
                        <button>Select file</button>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          {fileDropped && (
            <div>
              <div className="table3">
                <Table Header={HeaderTable3} Data={dataTable3}></Table>
              </div>
              <button
                className="Toconclude"
                onClick={navigateToConcludeInstructor}
              >
                <p>สรุปผล</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditUpdateCSO;
