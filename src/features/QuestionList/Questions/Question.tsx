import React from "react";
import { Container, Table } from "react-bootstrap";
import "../Pagination/Pagination.css";
import { PostList } from "../QuestionList";

interface Props {
  posts: PostList[];
  setInfoQuestion: (param: boolean) => void;
  getIds: (param: number) => void;
}

const Question = ({ posts, setInfoQuestion, getIds }: Props) => {
  const handleRedirectInfoQuestion = (id: number) => {
    setInfoQuestion(true);
    getIds(id);
  };

  return (
    <div className="content">
      <Container>
        <div className="question">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="p-10">Name</th>
                <th className="text-center p-10">Type</th>
                <th className="text-center p-10">Time</th>
                <th className="p-10">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="cursor-point"
                  onClick={() => handleRedirectInfoQuestion(post.id)}
                >
                  <td className="blue-cl p-10">{post.name}</td>
                  <td className="text-center p-10">{post.type}</td>
                  <td className="text-center p-10">
                    <span className="question__time">{post.difficulty}</span>
                  </td>
                  <td className="p-10">{post.expected_time} min</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Question;
