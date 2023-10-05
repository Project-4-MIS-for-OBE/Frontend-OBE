import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../../constants/path.route";
const useViewModel = () => {
  const navigate = useNavigate();

  const navigateToDashBoard = () => {
    navigate(PROTECTED_PATH.INSTRUCTOR_SUBJECT, { replace: true });
  };

  return navigateToDashBoard;
};
export default useViewModel;
