import { useParams } from "react-router-dom";

import Show from "./Components/Show";

const Detail = () => {
  const { id } = useParams();
  return (
    <>
      <Show id={id} />
    </>
  );
};

export default Detail;
