import { atom } from "recoil";

const authModal = atom({
  key: "authModalState",
  default: false,
});

export default authModal;
