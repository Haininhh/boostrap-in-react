import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import Editor from "./Editor/Editor";
import "./InfoQuestion.css";

interface Id {
  id: number;
}

const InfoQuestion = ({ id }: Id) => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    const getInfoQuestionURL = `/questions/${id}`;
    const getQuestionText = async () => {
      await axiosInstance.get(getInfoQuestionURL).then((response) => {
        const { question_text } = response.data;
        setDatas(question_text);
      });
    };
    getQuestionText();
  }, [id]);

  return (
    <div className="content bg-cl-grey d-flex justify-between">
      <div className="question-left bg-cl">{parse(datas)}</div>
      <Editor id={id} />
    </div>
  );
};
export default InfoQuestion;
