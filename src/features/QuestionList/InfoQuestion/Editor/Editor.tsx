import React, { useEffect, useState } from "react";
import MirrorQuestion from "../CodeMirror/MirrorQuestion";
import axiosInstance from "../../../axios/axiosInstance";

interface Props {
  id: number;
}

const Editor = ({ id }: Props) => {
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <script>${js}</script>
          </html>
        `
      );
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [js]);

  const getOutput = async () => {
    const solutionId = {
      solution: `${js}`,
      question_id: id,
    };
    await axiosInstance
      .post("/preview/run-template", solutionId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="question-right">
      <MirrorQuestion
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
      />
      <div className="pane">
        <div className="pane__run d-flex align-center">
          <button className="btn__run white-cl" onClick={getOutput}>
            Run
          </button>
          <p className="mb-0 fw-5">You can run the code multiple times.</p>
        </div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="200px"
        />
      </div>
    </div>
  );
};

export default Editor;
