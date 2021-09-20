import axios from "axios";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Paginations from "./Pagination/Pagination";
import Question from "./Questions/Question";

interface Postlist {
  id: number;
  name: string;
  type: number;
  difficulty: string;
  expected_time: string;
}

const QuestionList = () => {
  const [postList, setPostList] = useState<Postlist | never[]>([]);
  const [paginations, setPaginations] = useState({
    offset: 0,
    limit: 10,
    total: 1,
  });

  const [filters, setFilters] = useState({
    offset: 0,
  });
  useEffect(() => {
    const currentPage = queryString.stringify(filters);
    const requestURL = `http://35.213.94.95:8899/api/questions?limit=10&${currentPage}`;
    const cookies = new Cookies();
    const token = cookies.get("token");
    const instance = axios.create({
      baseURL: requestURL,
      headers: { Authorization: "Bearer " + token },
    });

    instance.get("").then((response) => {
      const { data, total } = response.data;
      setPostList(data);
      setPaginations({
        offset: filters.offset,
        limit: 10,
        total: total,
      });
    });
  }, [filters]);

  const handlePageChange = (currentPage: number) => {
    setFilters({
      offset: currentPage,
    });
  };
  return (
    <div>
      <Question posts={postList} />
      <Paginations paginations={paginations} onPageChange={handlePageChange} />
    </div>
  );
};

export default QuestionList;
