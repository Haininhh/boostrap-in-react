import axios from "axios";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import InfoQuestion from "./InfoQuestion/InfoQuestion";
import Paginations from "./Pagination/Pagination";
import Question from "./Questions/Question";

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

  /* useEffect get Data */
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
