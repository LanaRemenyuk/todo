import { useEffect, useState } from "react";
import { slice } from "lodash";
import Pagination from "@mui/material/Pagination";
import { Box, styled } from "@mui/material";
import Stack from "@mui/material/Stack";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledPagination = styled(Pagination)(() => ({
  "& .MuiPaginationItem-root": {
    color: "white",
    borderColor: "white"
  },
  "& .Mui-selected": {
    backgroundColor: "white !important",
    color: "black !important"
  }
}));

const PaginationStyled = ({
  elementsFullList,
  elements,
  elemPerPage,
  elementsPerPage,
  currentPage,
  setCurrentPage,
  setPaginationSlicedElements
}) => {
  const [totalPages, setTotalPages] = useState(1);

  const newTotalPages = Math.ceil(elements?.length / elemPerPage);
  const indexOfFirstElement = (currentPage - 1) * elementsPerPage;
  const indexOfLastElement = indexOfFirstElement + elementsPerPage;
  const paginationSlicedElements = slice(
    elements,
    indexOfFirstElement,
    indexOfLastElement
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (elements?.length > 0) {
      setTotalPages(newTotalPages);
      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages);
      }
      setPaginationSlicedElements(paginationSlicedElements);
    }
  }, [elements, elemPerPage, elementsPerPage, currentPage, elementsFullList]);

  return (
    elements?.length > elementsPerPage && (
      <Component>
        <Stack spacing={2}>
          {elements?.length > 0 && (
            <StyledPagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          )}
        </Stack>
      </Component>
    )
  );
};

export default PaginationStyled;
