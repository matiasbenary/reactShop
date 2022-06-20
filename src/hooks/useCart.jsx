import { useRecoilValue, useSetRecoilState } from "recoil";

import cartStateitem from "../shared/cart";

const useCart = () => {
  const setCartState = useSetRecoilState(cartStateitem);
  const cart = useRecoilValue(cartStateitem);

  const addProduct = (product) => {
    setCartState((cart) => {
      const hasProduct = cart.some((pr) => pr.id === product.id);
      if (hasProduct) {
        return cart.map((pr) => {
          if (pr.id === product.id) {
            return { ...pr, cant: pr.cant + 1 };
          }
          return pr;
        });
      } else {
        return [...cart, { ...product, cant: 1 }];
      }
    });
  };

  const deleteProduct = (product) => {
    setCartState((cart) => {
      return cart.filter((pr) => pr.id !== product.id);
    });
  };

  const removeOneProduct = (product) => {
    setCartState((cart) => {
      return cart.reduce((acc, pr) => {
        if (pr.id !== product.id) return [...acc, pr];
        if (pr.cant === 1) return acc;
        return [...acc, { ...pr, cant: pr.cant - 1 }];
      }, []);
    });
  };

  const calcTotal = () =>
    cart.reduce((acc, pr) => acc + pr.cant * pr.attributes.price, 0);

  const emptyCart = () => {
    setCartState([]);
  };

  return { addProduct, deleteProduct, removeOneProduct, emptyCart, calcTotal };
};

export default useCart;
