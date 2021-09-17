import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

const Paginations = (props) => {
  const { paginations, onPageChange } = props;
  const { offset, limit, total } = paginations;
  const totalPages = Math.ceil(total / limit);
  const [active, setActive] = useState(0);

  const pages = [];
  for (let i = 0; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageChange = (currentPage) => {
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
