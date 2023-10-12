import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../../constants/path.route";
type StatusObject = {
  status: string;
  color: string;
};

const useViewModel = () => {
  const navigate = useNavigate();

  const navigateToEditPoint = () => {
    navigate(PROTECTED_PATH.EDIT_POINT, { replace: false });
  };
  const navigateToConcludeInstructor = () => {
    navigate(PROTECTED_PATH.INSTRUCTOR_CONCLUDE, { replace: false });
  };

  const Status = (status: string) => {
    let color: string = "none";
    let statusText: string = "";
    if (status === "Waiting") {
      color = "status gray";
      statusText = "Waiting";
    } else if (status === "Inprogress") {
      color = "status yellow";
      statusText = "In Progress";
    } else if (status === "Success") {
      color = "status green";
      statusText = "Success";
    }
    const statusReturn: StatusObject = { status: statusText, color: color };

    return statusReturn;
  };

  return { navigateToEditPoint, navigateToConcludeInstructor, Status };
};

export default useViewModel;
