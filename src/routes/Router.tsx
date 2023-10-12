import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PROTECTED_PATH, UNPROTECTED_PATH } from "../constants/path.route";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EditUpdateCSO from "../pages/EditUpdateCSO";
import ConcludeInstructor from "../pages/ConcludeInstructor";
import StudentPage from "../pages/StudentPage";
import ConcludeError from "../pages/ConcludeError";
import Callback from "../pages/Callback";
import { useContext } from "react";
import UserInfoContext from "../contexts/userContext";
import { CmuOAuthBasicInfo } from "../types";

interface ICustomRoute {
	user?: CmuOAuthBasicInfo | null;
	redirectPath: string;
	children: JSX.Element;
}

const ProtectRoute = ({ user, redirectPath, children }: ICustomRoute) => {
	if (user) {
		return children;
	}
	return <Navigate to={redirectPath} replace />;
};

const PublicRoute = ({ user, redirectPath, children }: ICustomRoute) => {
	if (!user) {
		return children;
	}
	return <Navigate to={redirectPath} replace />;
};
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
								<PublicRoute
									user={userInfo}
									redirectPath={PROTECTED_PATH.INSTRUCTOR_SUBJECT}
								>
									<Login />
								</PublicRoute>
							}
						/>
					</Route>

					<Route>
						<Route
							path={PROTECTED_PATH.INSTRUCTOR_SUBJECT}
							element={
								<ProtectRoute
									user={userInfo}
									redirectPath={UNPROTECTED_PATH.LOGIN}
								>
									<Dashboard />
								</ProtectRoute>
							}
						/>
					</Route>

					<Route>
						<Route
							path={PROTECTED_PATH.EDIT_POINT}
							element={
								<ProtectRoute
									user={userInfo}
									redirectPath={UNPROTECTED_PATH.LOGIN}
								>
									<EditUpdateCSO />
								</ProtectRoute>
							}
						/>
					</Route>

					<Route>
						<Route
							path={PROTECTED_PATH.INSTRUCTOR_CONCLUDE}
							element={
								<ProtectRoute
									user={userInfo}
									redirectPath={UNPROTECTED_PATH.LOGIN}
								>
									<ConcludeInstructor />
								</ProtectRoute>
							}
						/>
					</Route>
					<Route>
						<Route
							path={PROTECTED_PATH.ERROR_CONCLUDE}
							element={<ConcludeError />}
						/>
					</Route>
					<Route>
						<Route
							path={PROTECTED_PATH.STUDENT_CONCLUDE}
							element={
								<ProtectRoute
									user={userInfo}
									redirectPath={UNPROTECTED_PATH.LOGIN}
								>
									<StudentPage />
								</ProtectRoute>
							}
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
