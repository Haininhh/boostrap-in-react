import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import parse from "html-react-parser";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const InfoQuestion = () => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    const getInfoQuestionURL = "http://35.213.94.95:8899/api/questions/513";
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
    <div className="content">
      {parse(datas)}
      <CodeMirror
        value="<h1>I ♥ react-codemirror2</h1>"
        options={{
          mode: "xml",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
};
export default InfoQuestion;
