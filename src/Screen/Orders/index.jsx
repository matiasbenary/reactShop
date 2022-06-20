import { useEffect } from "react";

import { useRecoilValue } from "recoil";

import useGet from "../../hooks/useGet";
import userState from "../../shared/user";
import { convertFilterOrder } from "../../utils/objectToUri";

const Orders = () => {
  const { response, loading, setFilters } = useGet("orders", ["image"]);
  const user = useRecoilValue(userState);
  useEffect(() => {
    setFilters(convertFilterOrder(user.user.id));
  }, []);
  console.log(response);
  return <div>Hello World</div>;
};
export default Orders;
