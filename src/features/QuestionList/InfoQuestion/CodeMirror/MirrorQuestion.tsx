import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import React, { useState } from "react";

const MirrorQuestion = () => {
  const [value, setValue] = useState("");

  const handleChange = () => {};
  return (
    <>
      <div className="editor-container">
        <div className="editor-title">Language: C++</div>
      </div>
      <div>
        <CodeMirror
          value={value}
          className=""
          options={{
            lineWrapping: true,
            lint: true,
            lineNumbers: true,
          }}
          onBeforeChange={handleChange}
        />
      </div>
    </>
  );
};

export default MirrorQuestion;
