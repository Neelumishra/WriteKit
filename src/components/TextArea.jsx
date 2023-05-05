import React from "react";
import { useRecoilState } from "recoil";
import { contents } from "./recoilAtom/Atom";
import FormatBar from "./FormatBar";
import styles from "./TextArea.module.css";

export default function TextArea() {
  const [content, setContent] = useRecoilState(contents);

  function handleAction(res, res1, res2) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    document.execCommand(res, res1, res2);
    const content = document.querySelector("#my-content-editable").innerHTML;
    setContent(content);
  }

  function handleChange(res, res1, res2) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    document.execCommand(res, res1, res2);
    const content = document.querySelector("#my-content-editable").innerHTML;
    setContent(content);
  }

  function handleHeadingChange(res, res1, res2) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    document.execCommand(res, res1, res2);
    const content = document.querySelector("#my-content-editable").innerHTML;
    setContent(content);
  }

  function handleImageSelect(res) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    // const image = URL.createObjectURL(res);
    document.execCommand("insertImage", false, res);
    console.log(res);
    const content = document.querySelector("#my-content-editable").innerHTML;
    setContent(content);
  }

  function handleAlignChange(res) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    // const image = URL.createObjectURL(res);
    document.execCommand(res);
    console.log(res);
    const content = document.querySelector("#my-content-editable").innerHTML;
    setContent(content);
  }

  return (
    <>
      <FormatBar
        handleAction={handleAction}
        handleChange={handleChange}
        handleHeadingChange={handleHeadingChange}
        handleImageSelect={handleImageSelect}
        handleAlignChange={handleAlignChange}
      />
      <div className={styles.container}>
        <div
          className={styles.main}
          contentEditable
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
