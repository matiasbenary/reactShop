import { atom, selector } from "recoil";

import localStorageEffect from "./utils";

const userState = atom({
  key: "userState",
  default: null,
  effects: [localStorageEffect("user")],
});

const isLogedUserState = selector({
  key: "isLogedUser",
  get: ({ get }) => {
    const user = get(userState);
    return user;
  },
});

export default userState;
export { isLogedUserState };
