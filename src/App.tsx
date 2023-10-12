import { useEffect, useState } from "react";
import Router from "./routes/Router";
import { CmuOAuthBasicInfo } from "./types";
import UserInfoContext from "./contexts/userContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { getUserDataQuery } from "./services/user.axios";
function App() {
	const [userInfo, setUserInfo] = useState<CmuOAuthBasicInfo | null>(null);
	const queryClient = new QueryClient();

	useEffect(() => {
		const fetchData = async () => {
			if (!userInfo) {
				const resp = await getUserDataQuery();
				if (resp) {
					setUserInfo(resp);
				}
			}
		};

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData();
	}, [userInfo]);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<UserInfoContext.Provider
					value={{ userInfo: userInfo, setUserInfo: setUserInfo }}
				>
					<div>
						<Router />
					</div>
				</UserInfoContext.Provider>
			</QueryClientProvider>
		</>
	);
}

export default App;
