import { atom } from "recoil";

import localStorageEffect from "./utils";

const cartState = atom({
  key: "cartState",
  default: [],
  effects: [localStorageEffect("cart")],
});

export default cartState;
