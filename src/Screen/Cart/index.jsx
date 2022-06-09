import { useRecoilValue } from "recoil";
import cartState from "../../shared/cart";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  return (
    <>
      Hola
      {cart.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <img src={item.img}></img>
        </div>
      ))}
    </>
  );
};

export default Cart;
