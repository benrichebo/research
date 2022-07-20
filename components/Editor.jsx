import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({ content, setContent }) {

const [text, setText] = useState("");



  return (
    <>
      <Editor
        value={content}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: "text" }));
        }}
        onEditorChange={(newValue, editor) => {
          setContent(newValue);
          setText(editor.getContent({ format: "text" }));
        }}
      />
    </>
  );
}

export default TextEditor;
