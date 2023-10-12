import { createContext } from "react";
import { CmuOAuthBasicInfo } from "../types";

type TUserInfoCtx = {
  userInfo: CmuOAuthBasicInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<CmuOAuthBasicInfo | null>>;
};

const UserInfoContext = createContext<TUserInfoCtx>({
  userInfo: null,
  setUserInfo: () => null,
});

export default UserInfoContext;
