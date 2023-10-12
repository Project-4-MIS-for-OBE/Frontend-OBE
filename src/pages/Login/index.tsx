import "./index.css";
const Login = () => {
	return (
		<div>
			<div className="login">
				<img src="./src/assets/logo.svg" className="OBE-logo" />
				<h5>Log in to CPE OBE</h5>
				<a
					href={import.meta.env.VITE_APP_CMU_OAUTH_AUTHORIZE_URL}
					className="login-btn"
				>
					<img src="./src/assets/CMU SUB-LOGO.svg" />
					<p>CMU Account</p>
				</a>
			</div>
			<div className="decoration-bg1"></div>
			<div className="decoration-bg2"></div>
		</div>
	);
};

export default Login;
