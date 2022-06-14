import qs from "qs";
const MAX = 1000;
const MIN = 0;
const PAGESIZE = 2;

const convertFilter = (filter) =>
  qs.stringify(
    {
      filters: {
        ...(filter.title && { title: { $contains: filter.title } }),
        price: { $gte: filter.minPrice || MIN, $lte: filter.maxPrice || MAX },
        ...(filter.hasStock || { stock: { $gt: 0 } }),
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

const converPopulate = (populate) =>
  qs.stringify(
    {
      populate,
    },
    {
      encodeValuesOnly: true,
    }
  );

const converPagination = (page) =>
  qs.stringify(
    {
      pagination: {
        page,
        pageSize: PAGESIZE,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

export { convertFilter, converPopulate, converPagination };
