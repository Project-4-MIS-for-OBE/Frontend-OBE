import { useContext } from "react";
import "./index.css";
import UserInfoContext from "../../contexts/userContext";
import { postUserLogout } from "../../services/user.axios";
import { useNavigate } from "react-router-dom";
import { UNPROTECTED_PATH } from "../../constants/path.route";
// import useViewModel from "./viewModel";

// import { PROTECTED_PATH } from "../../constants/path.route";
// import { useLocation } from "react-router-dom";

// interface MenuTemplatesProps {
//   label: string;
//   icon: React.ReactElement<SvgIconProps>;
//   case: string;
//   route: string;
// }
// const menuTemplates: MenuTemplatesProps[] = [
//   {
//     label: "Dashboard",
//     case: "instructor-subject",
//     route: PROTECTED_PATH.INSTRUCTOR_SUBJECT,
//   },
//   {
//     label: "Edit Score",
//     case: "edit-point",
//     route: PROTECTED_PATH.EDIT_POINT,
//   },
//   {
//     label: "Conclude",
//     case: "instructor-conclude",
//     route: PROTECTED_PATH.INSTRUCTOR_CONCLUDE,
//   },
// ];

export const Navbar = () => {
	// const { onSideNavClick } = useViewModel();
	// const location = useLocation();
	const { userInfo, setUserInfo } = useContext(UserInfoContext);
	const navigate = useNavigate();

	const handleLogout = async () => {
		await postUserLogout();
		setUserInfo(null);
		navigate(UNPROTECTED_PATH.LOGIN);
	};
	return (
		<div>
			{/* {menuTemplates.map((elem: MenuTemplatesProps, key: number) => {
        return <button>{elem.label}</button>;
      })} */}
			<div className="navbar" onClick={handleLogout}>
				<div className="navbar-topic">
					<img src="./src/assets/logo.svg" className="CPEOBE-icon" />
					<h1>CPE OBE</h1>
				</div>
				<div className="navbarUsername">
					<img src="./src/assets/profile.svg" className="userIcon" />

					<div>
						<h5>
							{userInfo?.firstname_EN} {userInfo?.lastname_EN}
						</h5>
						<p>{userInfo?.organization_name_EN}</p>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 39 39"
						fill="none"
					>
						<path
							d="M18.3624 23.2375L14.1374 19.0125C13.6228 18.4979 13.508 17.9091 13.7929 17.2461C14.0778 16.5831 14.5854 16.2511 15.3156 16.25H23.6843C24.4156 16.25 24.9236 16.582 25.2086 17.2461C25.4935 17.9102 25.3781 18.499 24.8624 19.0125L20.6374 23.2375C20.4749 23.4 20.2989 23.5219 20.1093 23.6031C19.9197 23.6844 19.7166 23.725 19.4999 23.725C19.2833 23.725 19.0801 23.6844 18.8906 23.6031C18.701 23.5219 18.5249 23.4 18.3624 23.2375Z"
							fill="#4F79BC"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
