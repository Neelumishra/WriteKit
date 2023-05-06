import { useState } from "react";
import { useRecoilState } from "recoil";

import styles from "./FormatBar.module.css";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import FormatIndentDecreaseOutlinedIcon from "@mui/icons-material/FormatIndentDecreaseOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";
import FormatClearOutlinedIcon from "@mui/icons-material/FormatClearOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
// import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

const FormatBar = (props) => {
 

  function handleAction(res) {
    props.handleAction(res, false, "");
  }
  function handleChange(e, res) {
    console.log(e,res)
    props.handleChange(res, false, e.target.value);
    
  }

  function handleHeadingChange(e) {
   console.log(e.target.value)
    props.handleHeadingChange("formatBlock", false, e.target.value);
  }
  function handleAlignChange(e) {
    props.handleAlignChange(e.target.value);
  }

  function handleImageSelect(e) {
    
    const file = URL.createObjectURL(e.target.files[0]);
   
     props.handleImageSelect(file);
  }
 

  return (
    <div className={styles.container}>
      <button onClick={() => handleAction("undo")}>
        <UndoIcon />
      </button>
      <button onClick={() => handleAction("redo")}>
        <RedoIcon />
      </button>
      <button onClick={() =>window.print()} >
        <PrintOutlinedIcon />
      </button>
      <button>
        <SpellcheckOutlinedIcon />
      </button>
      <button>
        <ImagesearchRollerOutlinedIcon />
      </button>
      <select className={styles.select} onChange={handleAlignChange}>
        <option value="Fit">Fit</option>
        <option value="50%">50%</option>
        <option value="75%">75%</option>
        <option value="90%">90%</option>
        <option value="100%">100%</option>
        <option value="125%">125%</option>
        <option value="150%">150%</option>
        <option value="200%">200%</option>
      </select>
      <select className={styles.select} onChange={handleHeadingChange}>
        <option value="p">NormalText</option>
        <option value="<h1>">H1</option>
        <option value="<h2>">H2</option>
        <option value="<h3>">H3</option>
        <option value="<h4>">H4</option>
        <option value="<h5>">H5</option>
        <option value="<h6>">H6</option>
      </select>
      <select onChange={(e) => handleChange(e, "fontName")}>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
      </select>

      <select className={styles.select} onChange={handleAlignChange}>
        <option value="justifyLeft">justifyLeft</option>
        <option value="justifyRight">justifyRight</option>
        <option value="justifyCenter">justifyCenter</option>
        <option value="justifyFull">justifyFull</option>
      </select>
      <button onClick={() => handleAction("bold")}>
        <FormatBoldOutlinedIcon />
      </button>
      <button onClick={() => handleAction("italic")}>
        <FormatItalicOutlinedIcon />
      </button>
      <button onClick={() => handleAction("underline")}>
        <FormatUnderlinedOutlinedIcon />
      </button>
      <label>
        <ModeOutlinedIcon />
        <input
          type="color"
          //  hidden
          onChange={(e) => {
            handleChange(e, "backcolor");
          }}
        />
      </label>
      <label>
        <FormatColorTextOutlinedIcon />
        <input
        
          type="color"
          // hidden
          onChange={(e) => {
            handleChange(e, "forecolor");
          }}
        />
      </label>
      <button onClick={() => handleAction("unordered-list")}>
        <FormatListBulletedOutlinedIcon />
      </button>
      <button onClick={() => handleAction("ordered-list")}>
        <FormatListNumberedOutlinedIcon />
      </button>
      <button onClick={() => handleAction("outdent")}>
        <FormatIndentDecreaseOutlinedIcon />
      </button>
      <button onClick={() => handleAction("indent")}>
        <FormatIndentIncreaseOutlinedIcon />
      </button>
      <button onClick={(e) => handleChange(e, "removeFormat")}>
        <FormatClearOutlinedIcon />
      </button>
      
      <label className={styles.uploadLabel}>
        <InsertPhotoOutlinedIcon />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          hidden
        />
      </label>
    </div>
  );
};

export default FormatBar;
