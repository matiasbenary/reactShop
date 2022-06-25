import { Button, Flex } from "@chakra-ui/react";

const Pagination = ({ setPage, pagination }) => {
  return (
    <Flex gap={5} mt={5} justify="center" align="center">
      <Button
        variant="brand"
        onClick={() => {
          if (pagination.page <= 1) return;
          setPage(pagination.page - 1);
        }}
        isDisabled={pagination.page === 1}
      >
        Anterior
      </Button>
      <Button
        variant="brand"
        onClick={() => {
          if (pagination.total === pagination.page) return;
          setPage(pagination.page + 1);
        }}
        isDisabled={pagination.pageCount === pagination.page}
      >
        Siguiente
      </Button>
    </Flex>
  );
};
export default Pagination;
