import React, { useState } from "react";
import MirrorQuestion from "../CodeMirror/MirrorQuestion";

const Editor = () => {
  const [value, setValue] = useState("");
  return (
    <div className="question-right">
      <MirrorQuestion
        language="xml"
        displayName="C++"
        value={value}
        onChange={setValue}
      />
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Editor;
