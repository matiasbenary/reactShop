import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import cartState from "../../shared/cart";

const Detail = () => {
  const { id } = useParams();
  const setCart = useSetRecoilState(cartState);
  return (
    <>
      <h1>Hola {id}</h1>
      <button
        onClick={() =>
          setCart((oldCart) => [
            ...oldCart,
            {
              id: 1,
              stock: 100,
              img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVlYmxlc3xlbnwwfHwwfHw%3D",
              title: "Prueba",
              price: 100,
            },
          ])
        }
      >
        Add cart
      </button>
    </>
  );
};

export default Detail;
