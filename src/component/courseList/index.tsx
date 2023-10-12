import "./index.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useViewModel from "./viewModel";
import { useState } from "react";
import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
type Course = {
  courseNo: string;
  section: string[];
  courseTitle: string;
  instructorName?: string;
  coopInstruction?: string[][];
  status?: string;
};

type CourseListProps = {
  data: Course[];
  instructor?: string;
  status: boolean;
};
type StatusObject = {
  status: string;
  color: string;
};
const CourseList = ({ data, instructor, status }: CourseListProps) => {
  console.log(data);
  const { Status, navigateToEditPoint, navigateToConcludeInstructor } =
    useViewModel();
  const [semesterm, setSemesterm] = useState("");

  const handleSemestermChange = (event: any) => {
    setSemesterm(event.target.value);
  };
  const [year, setYear] = useState("");

  const handleYearChange = (event: any) => {
    setYear(event.target.value);
  };
  return (
    <div className="container">
      <div className="flex">
        <img src="./src/assets/subject.svg" className="subject-icon" />
        <h3>วิชาที่อยู่ในการดูแล</h3>
      </div>
      <div className="flex filter">
        <div className="filterContain">
          <h4>ปีการศึกษา</h4>
          <FormControl size="small" style={{ width: "125px" }}>
            <InputLabel id="demo-simple-select-label">ปีการศึกษา</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Age"
              onChange={handleYearChange}
            >
              <MenuItem value={1}>2566</MenuItem>
              <MenuItem value={2}>2565</MenuItem>
              <MenuItem value={2}>2564</MenuItem>
              <MenuItem value={2}>2563</MenuItem>
              <MenuItem value={2}>2562</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="filterContain">
          <h4>เทอม</h4>

          <FormControl size="small" style={{ width: "125px" }}>
            <InputLabel id="demo-simple-select-label">เทอม</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={semesterm}
              label="Semesterm"
              onChange={handleSemestermChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="filterContain">
          <h4>ค้นหาจากรหัสหรือชื่อวิชา</h4>
          <TextField
            id="outlined-basic"
            label="ค้นหาจากรหัสหรือชื่อวิชา"
            variant="outlined"
            size="small"
            style={{ width: "350px" }}
          />
        </div>
      </div>
      <div className="CourseListContainer">
        <table>
          <thead>
            <tr>
              <th className="centered">รหัสวิชา</th>
              <th className="centered">Section</th>
              <th className="leftSide">ชื่อวิชา</th>
              <th className="leftSide">อาจารย์</th>
              {status ? <th className="centered">สถานะ</th> : ""}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((courseData) => {
              const instructorToUse = courseData.instructorName || instructor;
              let status: StatusObject;
              if (courseData.status) {
                {
                  status = Status(courseData.status);
                }
              }

              return courseData?.section?.map((section, index) => (
                <tr
                  className={
                    index % 2 === 0 ? "underline-normal" : "underline-dark"
                  }
                  key={`${courseData.courseNo}-${section}`}
                >
                  <td className="centered">
                    {index === 0 ? courseData.courseNo : ""}
                  </td>
                  <td className="centered">{section}</td>
                  <td className="leftSide">{courseData.courseTitle}</td>
                  <td className="leftSide">{`${instructorToUse} (${
                    index === 0 ? "ตัวเอง" : ""
                  })`}</td>
                  {status && (
                    <td className={`centered ${status.color}`}>
                      <div className={`circleStatus ${status.color}`}></div>
                      {status.status}
                    </td>
                  )}
                  <td className="rightSide button">
                    <button
                      className="modify-button"
                      onClick={navigateToEditPoint}
                    >
                      <div className="button-content">
                        <EditOutlinedIcon
                          style={{
                            width: "1rem",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        />
                        <p>แก้ไข</p>
                      </div>
                    </button>
                    <button
                      className="watchOnly-button"
                      onClick={navigateToConcludeInstructor}
                    >
                      <div className="button-content">
                        <VisibilityOutlinedIcon
                          style={{
                            width: "1rem",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        />
                        <p>ดูสรุป</p>
                      </div>
                    </button>
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
