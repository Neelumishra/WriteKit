import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FeedIcon from "@mui/icons-material/Feed";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PrintIcon from "@mui/icons-material/Print";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreIcon from "@mui/icons-material/Restore";
import ReplayIcon from "@mui/icons-material/Replay";
import RedoIcon from "@mui/icons-material/Redo";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import styles from "./Head.module.css";
import { Avatar } from "@mui/material";
import { useRef } from "react";

const Head = () => {
  let imageref = useRef();
  function handleClick(e) {
    console.log("inside handleClick");
    if (e === "Print") {
      window.print();
    } else if (e === "Undo") {
      document.execCommand("undo");
    } else if (e === "Redo") {
      document.execCommand("redo");
    } else if (e === "Copy") {
      document.execCommand("copy");
    } else if (e === "Paste") {
      navigator.clipboard.readText().then((text) => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
        selection.removeAllRanges();
      });
    } else if (e === "Cut") {
      document.execCommand("cut");
    } else if (e === "select all") {
      document.execCommand("selectAll");
    } else if (e === "Image") {
      imageref.current.click();
    } else if (e === "Download") {
      const divContent = document.getElementById("myDiv").innerHTML;
      const blob = new Blob([divContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Download.txt";
      a.click();
      URL.revokeObjectURL(url);
    }
  }

  function handleImage(event) {
    const file = URL.createObjectURL(event.target.files[0]);
    document.execCommand("insertImage", false, file);
  }
  const options = [
    {
      label: "File",
      values: [
        { name: "New", Icon: <FeedIcon /> },
        { name: "Open", Icon: <FolderOpenIcon /> },
        { name: "Make a Copy", Icon: <ContentCopyIcon /> },
        { name: "Share", Icon: <ShareIcon /> },
        { name: "Email", Icon: <EmailIcon /> },
        { name: "Download", Icon: <DownloadIcon /> },
        { name: "Rename", Icon: <DriveFileRenameOutlineIcon /> },
        { name: "Move", Icon: <DriveFileMoveIcon /> },
        { name: "Add a shortcut to Drive", Icon: <AddBoxIcon /> },
        { name: "Language", Icon: <DeleteOutlineIcon /> },
        { name: "History", Icon: <RestoreIcon /> },
        { name: "Print", Icon: <PrintIcon /> },
      ],
    },

    {
      label: "Edit",
      values: [
        { name: "Undo", Icon: <ReplayIcon /> },
        { name: "Redo", Icon: <RedoIcon /> },
        { name: "Cut", Icon: <ContentCutIcon /> },
        { name: "Copy", Icon: <ContentCopyIcon /> },
        { name: "Paste", Icon: <ContentPasteIcon /> },
        { name: "Paste without formatting", Icon: <ContentPasteOffIcon /> },
        { name: "select all", Icon: <SelectAllIcon /> },
        { name: "Delete", Icon: <DeleteOutlineIcon /> },
        { name: "Find and replace", Icon: <FindReplaceIcon /> },
      ],
    },
    {
      label: "View",
      values: [
        { name: "Mode", Icon: <CreateIcon /> },
        { name: "Show PrintOutLayout", Icon: <CheckIcon /> },
        { name: "Show Ruler", Icon: <CheckIcon /> },
        { name: "Show Outline", Icon: <CheckIcon /> },
        { name: "Show equation toolbar", Icon: <CheckIcon /> },
        { name: "Show non-print", Icon: <CheckIcon /> },
        { name: "FullScreen", Icon: <FullscreenIcon /> },
      ],
    },
    {
      label: "Insert",
      values: [
        { name: "Image", Icon: <FullscreenIcon /> },
        { name: "Table", Icon: <FindReplaceIcon /> },
        { name: "Drawing", Icon: <RedoIcon /> },
        { name: "Horizonatal Line ", Icon: <DeleteOutlineIcon /> },
        { name: "Emoji", Icon: <ContentCopyIcon /> },
        { name: "Smart chips", Icon: <SelectAllIcon /> },
        { name: "Drop-down", Icon: <FindReplaceIcon /> },
        { name: "footnote", Icon: <FindReplaceIcon /> },
        { name: "Building blocks", Icon: <SelectAllIcon /> },
        { name: "Special characters", Icon: <FindReplaceIcon /> },
        { name: "Equation", Icon: <ReplayIcon /> },
        { name: "Watermark", Icon: <FindReplaceIcon /> },
        { name: "Headers and footers", Icon: <SelectAllIcon /> },
        { name: "Page numbers", Icon: <FindReplaceIcon /> },
        { name: "Break and Link", Icon: <SelectAllIcon /> },
      ],
    },
    {
      label: "Format",
      values: [
        { name: "Text", Icon: <FindReplaceIcon /> },
        { name: "Paragraph Styles", Icon: <FindReplaceIcon /> },
        { name: "Align and Indent", Icon: <ReplayIcon /> },
        { name: "Line & paragraph spacing", Icon: <SelectAllIcon /> },
        { name: "Colomns", Icon: <FindReplaceIcon /> },
        { name: "Bullets and numbering", Icon: <SelectAllIcon /> },
        { name: "Headers and Footers", Icon: <FindReplaceIcon /> },
        { name: "Page numbers", Icon: <ReplayIcon /> },
        { name: "Page orientaton", Icon: <SelectAllIcon /> },
        { name: "Table", Icon: <FindReplaceIcon /> },
        { name: "Image", Icon: <ReplayIcon /> },
        { name: "Borders and lines", Icon: <SelectAllIcon /> },
        { name: "Clear formatting", Icon: <SelectAllIcon /> },
      ],
    },
    {
      label: "Tools",
      values: [
        { name: "Spelling and Grammar", Icon: <FindReplaceIcon /> },
        { name: "Word count", Icon: <CreateIcon /> },
        { name: "Review suggested edits", Icon: <FindReplaceIcon /> },
        { name: "Compare documents", Icon: <FindReplaceIcon /> },
        { name: "Citations", Icon: <ReplayIcon /> },
        { name: "Explore", Icon: <FindReplaceIcon /> },
        { name: "Linked objects", Icon: <FindReplaceIcon /> },
        { name: "Dictionary", Icon: <FindReplaceIcon /> },
        { name: "Translate document", Icon: <ReplayIcon /> },
        { name: "Voice Typing", Icon: <FindReplaceIcon /> },
        { name: "Notifications Settings", Icon: <FindReplaceIcon /> },
        { name: "Preferences", Icon: <ReplayIcon /> },
        { name: "Notifications Settings", Icon: <FindReplaceIcon /> },
        { name: "Accessibility", Icon: <ReplayIcon /> },
      ],
    },
    {
      label: "Extension",
      values: [
        { name: "Add-ons", Icon: <DeleteOutlineIcon /> },
        { name: "Apps Script", Icon: <FindReplaceIcon /> },
      ],
    },
    {
      label: "Help",
      values: [
        { name: "Help", Icon: <DeleteOutlineIcon /> },
        { name: "Traning", Icon: <FindReplaceIcon /> },
        { name: "Updates", Icon: <FindReplaceIcon /> },
        { name: "Help Docs improve", Icon: <DeleteOutlineIcon /> },
        { name: "Privacy Policy", Icon: <FindReplaceIcon /> },
        { name: "Terms of Service", Icon: <FindReplaceIcon /> },
        { name: "Keyboard shortcuts", Icon: <DeleteOutlineIcon /> },
      ],
    },
  ];
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <DescriptionIcon
            sx={{ color: "#4285F4", height: "65px", width: "65px" }}
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.heading}>
            <p contentEditable>Untitled document</p>
            <div className={styles.headIcon}>
              <StarOutlineIcon />
              <DriveFileMoveIcon />
            </div>
          </div>
          <div className={styles.options}>
            {options.map((option, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>{option.label}</button>
                  <div className={styles.dropdowncontent}>
                    {option.values.map((e, index) => (
                      <a className={styles.Iconname} href="#" key={index}>
                        <span
                          style={{ marginRight: "4px" }}
                          onClick={() => handleClick(e.name)}
                        >
                          <input
                            onChange={handleImage}
                            type="file"
                            hidden
                            ref={imageref}
                          />
                          {e.Icon}
                          {e.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <CommentIcon />
        <VideocamIcon />
        <PersonAddAltIcon />
        <Avatar
          sx={{ marginBottom: "3rem" }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
