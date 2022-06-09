import { useRecoilValue } from "recoil";
import cartState from "../../shared/cart";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  return (
    <>
      Hola
      {cart.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </>
  );
};

export default Cart;
