import React, { useState } from "react";
import { Container, Dropdown, Pagination } from "react-bootstrap";
import "./Pagination.css";

interface PaginationProps {
  offset: number;
  limit: number;
  total: number;
}

interface Props {
  paginations: PaginationProps;
  onPageChange: (currentPage: number) => void;
}
const Paginations = ({ paginations, onPageChange }: Props) => {
  const { offset, limit, total } = paginations;
  const totalPages = Math.ceil(total / limit);
  const [active, setActive] = useState(0);

  const pages = [];
  for (let i = 0; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageChange = (currentPage: number) => {
    onPageChange(currentPage);
    setActive(currentPage);
  };
  console.log(active);
  return (
    <Container>
      <div className="paginate d-flex justify-right">
        <Pagination>
          <Pagination.First
            disabled={offset <= 0}
            onClick={() => handlePageChange(totalPages - totalPages)}
          />

          {pages.map((page) => (
            <Pagination.Item
              key={page}
              active={page === active}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          <Pagination.Last
            disabled={offset >= totalPages}
            onClick={() => handlePageChange(totalPages)}
          />
        </Pagination>

        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              10/page
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu text-center">
              {pages.map((page) => (
                <Dropdown.Item
                  key={page}
                  href="#"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Container>
  );
};

export default Paginations;
