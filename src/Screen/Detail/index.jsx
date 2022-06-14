import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import cartState from "../../shared/cart";
import Show from "./Components/Show";

const Detail = () => {
  const { id } = useParams();
  const setCart = useSetRecoilState(cartState);
  return (
    <>
      <Show id={id}></Show>
    </>
  );
};

export default Detail;
