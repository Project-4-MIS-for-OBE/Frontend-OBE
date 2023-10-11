import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PROTECTED_PATH, UNPROTECTED_PATH } from "../constants/path.route";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EditUpdateCSO from "../pages/EditUpdateCSO";
import ConcludeInstructor from "../pages/ConcludeInstructor";
import StudentPage from "../pages/StudentPage";
import Callback from "../pages/Callback";
import { useContext } from "react";
import UserInfoContext from "../contexts/userContext";
const Router = () => {
	const { userInfo } = useContext(UserInfoContext);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route>
						<Route
							path={UNPROTECTED_PATH.LOGIN}
							element={
								userInfo !== null ? (
									<Navigate to={PROTECTED_PATH.INSTRUCTOR_SUBJECT} />
								) : (
									<Login />
								)
							}
						/>
					</Route>

					<Route>
						<Route
							path={PROTECTED_PATH.INSTRUCTOR_SUBJECT}
							element={<Dashboard />}
						/>
					</Route>

					<Route>
						<Route
							path={PROTECTED_PATH.EDIT_POINT}
							element={<EditUpdateCSO />}
						/>
					</Route>

					<Route>
						<Route
							path={PROTECTED_PATH.INSTRUCTOR_CONCLUDE}
							element={<ConcludeInstructor />}
						/>
					</Route>

					<Route>
						<Route
							path={PROTECTED_PATH.STUDENT_CONCLUDE}
							element={<StudentPage />}
						/>
					</Route>
					<Route>
						<Route
							path={UNPROTECTED_PATH.OAUTH_REDIRECT}
							element={<Callback />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
