import { useRecoilState } from "recoil";

import userState from "../shared/user";

const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  const singInUser = () => {
    setUser(true);
  };

  const singOutUser = () => {
    setUser(false);
  };

  return { user, singInUser, singOutUser };
};

export default useUser;
