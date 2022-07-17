import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({ content, setContent }) {
  const editorRef = useRef(null);
  /*  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  }; */

  useEffect(() => {
    if (editorRef?.current) {
      setContent(editorRef?.current?.getContent());
    }
  }, [editorRef?.current]);

  return (
    <>
      <Editor
        apiKey={process.env.TINY_MCE}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={content}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help | image",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}

export default TextEditor;
