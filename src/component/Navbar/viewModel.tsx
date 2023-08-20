import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../../constants/path.route";

const useViewModel = () => {
  const navigate = useNavigate();
  const onSideNavClick = (page: string) => {
    switch (page) {
      case "instructor-subject":
        navigate(PROTECTED_PATH.INSTRUCTOR_SUBJECT, { replace: true });
        break;
      case "edit-point":
        navigate(PROTECTED_PATH.EDIT_POINT, { replace: true });
        break;
      case "instructor-conclude":
        navigate(PROTECTED_PATH.INSTRUCTOR_CONCLUDE, { replace: true });
        break;
    }
  };
  return {
    onSideNavClick,
  };
};

export default useViewModel;
