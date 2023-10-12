import { Navbar } from "../../component/Navbar";
import { Chart } from "../../component/RadarChart";
import Table from "../../component/Table";
import useViewModel from "./viewModel";
import "./index.css";

const StudentPage = () => {
	const { dataTableSOstudent, HeaderTableSO } = useViewModel();
	return (
		<div>
			<Navbar />
			<div className="student menuFrame-container top">
				<div className="container-2">
					<h3>สรุปผลคะแนนประเมินวัตถุประสงค์การเรียนรู้ (SO)</h3>
					<div className="topic-2">
						<h3>ปีการศึกษา</h3> <h4>2565</h4>
						<h3>ภาคเรียนที่ </h3> <h4>2</h4>
					</div>

					<div className="flex">
						<img src="/conclude.svg" className="conclude-icon" />
						<h6>สรุปคะแนนประเมินวัตถุประสงค์การเรียนรูั (SO) รวมทุกวิชา </h6>
					</div>

					<div>
						<Table Header={HeaderTableSO} Data={dataTableSOstudent} />
						<div className="chart">
							<Chart />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentPage;
