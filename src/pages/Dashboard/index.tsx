import { Navbar } from "../../component/Navbar";
import CourseList from "../../component/courseList";
import cousrseListData from "../../data/courseListData.json";
import { useState, useEffect } from "react";
import "./index.css";

const Dashboard = () => {
  const [courseList, setCourseList] = useState<{
    instructorName: string;
    instructorCourse: {
      courseNo: string;
      section: string[];
      courseTitle: string;
      coopInstrunction: string[][];
      status: string;
    }[];
    relevantCourse: {
      courseNo: string;
      section: string[];
      courseTitle: string;
      instructorName: string;
      coopInstrunction: string[][];
    }[];
  }>({
    instructorName: "",
    instructorCourse: [],
    relevantCourse: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setCourseList(cousrseListData);
      } catch (err) {
        console.error("err msg", err);
      }
    };
    fetchData();
  });
  return (
    <div>
      <Navbar />
      <div className="menuFrame-container">
        <CourseList
          data={courseList?.instructorCourse}
          instructor={courseList.instructorName}
          status={true}
        />
        <div>
          <CourseList data={courseList?.relevantCourse} status={false} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
