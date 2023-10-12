import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserInfoContext from "../../contexts/userContext";
import { useMutation } from "react-query";
import { UNPROTECTED_API } from "../../constants/api.route";
import { PROTECTED_PATH, UNPROTECTED_PATH } from "../../constants/path.route";
import { coreApi } from "../../services/base.axios";
import { getUserDataQuery } from "../../services/user.axios";

function Callback() {
	const queryParameters = new URLSearchParams(window.location.search);
	const code = queryParameters.get("code");
	const navigate = useNavigate();
	const { setUserInfo } = useContext(UserInfoContext);

	const getLoginValidationQuery = (code: string) => {
		return new Promise((resolve, reject) => {
			coreApi
				.post(UNPROTECTED_API.CMU_OAUTH, null, {
					params: new URLSearchParams({ code }),
					withCredentials: true,
				})
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	};

	const {
		status: statusLoginValidation,
		isLoading: isLoadingLoginValidation,
		mutateAsync: mutateAsyncLoginValidation,
	} = useMutation(getLoginValidationQuery);

	const {
		status: statusUserData,
		isLoading: isLoadingUserData,
		mutateAsync: mutateAsyncUserData,
	} = useMutation(getUserDataQuery);

	const isLoading: boolean = isLoadingLoginValidation || isLoadingUserData;
	const isError: boolean =
		statusLoginValidation === "error" || statusUserData === "error";

	useEffect(() => {
		async function callbackHandler() {
			if (!code) return;
			try {
				await mutateAsyncLoginValidation(code);
				const data = await mutateAsyncUserData();
				setUserInfo(data);
				navigate(PROTECTED_PATH.INSTRUCTOR_SUBJECT, { replace: false });
			} catch (err) {
				console.log(err);
			}
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		callbackHandler();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{isLoading ? (
				<>LOADING.. .</>
			) : (
				isError && <Navigate to={UNPROTECTED_PATH.LOGIN} replace />
			)}
		</>
	);
}

export default Callback;
