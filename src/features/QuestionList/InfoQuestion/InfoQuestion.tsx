import axios from "axios";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Editor from "./Editor/Editor";
import "./InfoQuestion.css";

interface Id {
  id: number;
}

const InfoQuestion = ({ id }: Id) => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    const getInfoQuestionURL = `http://35.213.94.95:8899/api/questions/${id}`;
    const cookies = new Cookies();
    const token = cookies.get("token");
    const getQuestionText = async () => {
      const instance = axios.create({
        baseURL: getInfoQuestionURL,
        headers: { Authorization: "Bearer " + token },
      });
      await instance.get("").then((response) => {
        const { question_text } = response.data;
        setDatas(question_text);
      });
    };
    getQuestionText();
  });

  return (
    <div className="content bg-cl-grey d-flex justify-between">
      <div className="question-left bg-cl">{parse(datas)}</div>
      <Editor id={id} />
    </div>
  );
};
export default InfoQuestion;
