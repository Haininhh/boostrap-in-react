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
  const handleChange = (editor: string, data: string, value: string) => {
    onChange(value);
  };
  return (
    <div className="editor-content">
      <div className="editor-content__language">
        <div className="editor-title fw-5">Language: {displayName}</div>
      </div>
      <div className="editor-content__mirror">
        <CodeMirror
          onBeforeChange={handleChange}
          className="editor__codemirror"
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            // lineNumbers: true,
            mode: language,
          }}
        />
      </div>
    </div>
  );
};

export default MirrorQuestion;
