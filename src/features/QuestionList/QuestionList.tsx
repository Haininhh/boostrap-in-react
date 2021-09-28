import queryString from "query-string";
import React, { useEffect, useState } from "react";
import InfoQuestion from "./InfoQuestion/InfoQuestion";
import Paginations from "./Pagination/Pagination";
import Question from "./Questions/Question";
import axiosInstance from "../axios/axiosInstance";

export interface PostList {
  id: number;
  name: string;
  type: number;
  difficulty: string;
  expected_time: string;
}

const QuestionList = () => {
  const [postList, setPostList] = useState<PostList[]>([]);
  const [paginations, setPaginations] = useState({
    offset: 0,
    limit: 10,
    total: 1,
  });

  const [filters, setFilters] = useState({
    offset: 0,
  });

  const [infoQuestion, setInfoQuestion] = useState(false);

  const [id, setId] = useState(0);

  const handlePageChange = (currentPage: number) => {
    setFilters({
      offset: currentPage,
    });
  };

  /* useEffect get Data */
  useEffect(() => {
    const currentPage = queryString.stringify(filters);
    const requestURL = `/questions?limit=10&${currentPage}`;
    axiosInstance.get(requestURL).then((response) => {
      const { data, total } = response.data;
      setPostList(data);
      setPaginations({
        offset: filters.offset,
        limit: 10,
        total: total,
      });
    });
  }, [filters]);

  return (
    <div className="question-list">
      {infoQuestion === false ? (
        <>
          <Question
            setInfoQuestion={setInfoQuestion}
            posts={postList}
            getIds={setId}
          />
          <Paginations
            paginations={paginations}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <InfoQuestion id={id} />
      )}
    </div>
  );
};

export default QuestionList;
