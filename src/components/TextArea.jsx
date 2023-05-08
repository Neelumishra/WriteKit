import React from "react";
import { useRecoilState } from "recoil";
import { contents } from "./recoilAtom/Atom";
import FormatBar from "./FormatBar";
import styles from "./TextArea.module.css";

export default function TextArea() {
  const [content, setContent] = useRecoilState(contents);

  function handleAction(res, res1, res2) {
    document.execCommand(res, res1, res2);
  }

  function handleChange(res, res1, res2) {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand(res, res1, res2);
  }

  function handleHeadingChange(res, res1, res2) {
    console.log(res, res1, res2);

    document.execCommand(res, res1, res2);
  }

  function handleImageSelect(res) {
   
    document.execCommand("insertImage", false, res);
    console.log(res);
  }

  function handleAlignChange(res) {
    document.execCommand(res);
    setContent(res);
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
      <div className={styles.container} style={{ zoom: content }}>
        <div
          id="myDiv"
          // style={{ zoom: content }}
          className={styles.main}
          contentEditable="true"
          // dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
