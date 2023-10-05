import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../../constants/path.route";
const useViewModel = () => {
  const navigate = useNavigate();

  const navigateToEditPoint = () => {
    navigate(PROTECTED_PATH.EDIT_POINT, { replace: true });
  };
  const navigateToConcludeInstructor = () => {
    navigate(PROTECTED_PATH.INSTRUCTOR_CONCLUDE, { replace: true });
  };

  return { navigateToEditPoint, navigateToConcludeInstructor };
};
export default useViewModel;
