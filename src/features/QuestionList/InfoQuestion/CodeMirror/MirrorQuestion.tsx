import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";
// import React, { useState } from "react";

interface Props {
  language: string;
  displayName: string;
  value: string;
  onChange: (param: string) => void;
}

const MirrorQuestion = ({ language, displayName, value, onChange }: Props) => {
  // const [value, setValue] = useState("");

  const handleChange = (/* editor, data,  */ value: string) => {
    onChange(value);
  };
  return (
    <div>
      <div className="editor-container">
        <div className="editor-title">Language: C++</div>
      </div>
      <div>
        <CodeMirror
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            lineNumbers: true,
            mode: language,
          }}
          onBeforeChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MirrorQuestion;
