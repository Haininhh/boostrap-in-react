import axios from "axios";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import MirrorQuestion from "./CodeMirror/MirrorQuestion";
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
    const instance = axios.create({
      baseURL: getInfoQuestionURL,
      headers: { Authorization: "Bearer " + token },
    });
    instance.get("").then((response) => {
      const { question_text } = response.data;
      setDatas(question_text);
    });
  });

  return (
    <div className="content d-flex justify-between">
      <div className="question-left ml-2">{parse(datas)}</div>
      <MirrorQuestion />
    </div>
  );
};
export default InfoQuestion;
