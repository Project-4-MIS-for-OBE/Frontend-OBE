import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../../constants/path.route";
const useViewModel = () => {
  const navigate = useNavigate();

  const navigateToEditPoint = () => {
    navigate(PROTECTED_PATH.EDIT_POINT, { replace: false });
  };
  const navigateToConcludeInstructor = () => {
    navigate(PROTECTED_PATH.INSTRUCTOR_CONCLUDE, { replace: false });
  };

  return { navigateToEditPoint, navigateToConcludeInstructor };
};
export default useViewModel;
