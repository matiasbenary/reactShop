import { Button } from "@chakra-ui/react";

const Pagination = ({ setPage, pagination }) => {
  return (
    <div>
      <Button
        colorScheme="blue"
        onClick={() => {
          if (pagination.page <= 1) return;
          setPage(pagination.page - 1);
        }}
      >
        Anterior
      </Button>
      <Button
        colorScheme="blue"
        onClick={() => {
          if (pagination.total === pagination.page) return;
          setPage(pagination.page + 1);
        }}
      >
        Siguiente
      </Button>
    </div>
  );
};
export default Pagination;
