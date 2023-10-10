import "./index.css";
import useViewModel from "./viewModel";
const Login = () => {
  const navigateToDashBoard = useViewModel();
  return (
    <div>
      <div className="login">
        <img src="./src/assets/logo.svg" className="OBE-logo" />
        <h5>Log in to CPE OBE</h5>
        <div onClick={navigateToDashBoard} className="login-btn">
          <img src="./src/assets/CMU SUB-LOGO.svg" />
          <p>CMU Account</p>
        </div>
      </div>
      <div className="decoration-bg1"></div>
      <div className="decoration-bg2"></div>
    </div>
  );
};

export default Login;
