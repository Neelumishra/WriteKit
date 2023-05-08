import DescriptionIcon from "@mui/icons-material/Description";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
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
import { Avatar, Button, Tooltip } from "@mui/material";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
        { name: "Move", Icon: <DriveFileMoveOutlinedIcon /> },
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
              <Tooltip title="Star">
                <StarOutlineIcon />
              </Tooltip>
              <Tooltip title="Move file">
                <DriveFileMoveOutlinedIcon />
              </Tooltip>
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
        <Tooltip title="Open comment history">
          <CommentOutlinedIcon />
        </Tooltip>
        <Tooltip title="Join on call">
          <VideocamOutlinedIcon />
        </Tooltip>
        <Tooltip title="Private only to me">
          <Button
            sx={{
              borderRadius: "100px",
              cursor: "pointer",
              fontFamily: "Google Sans,Roboto,sans-serif",
              fontSize: "14px",
              fontWeight: "500",
              height: "36px",
              lineHeight: "20px",
              padding: "8px 16px",
              backgroundColor: "#c2e7ff",
              color: "#1a1a1a",
              "&:hover": {
                backgroundColor: "#c2e7ff",
                boxShadow:
                  "0 1px 0 rgba(60,64,67,0.302), 0 1px 3px rgba(60,64,67,0.502)",
              },
            }}
          >
            <LockOutlinedIcon />
            Share
          </Button>
        </Tooltip>
        <Tooltip title="Google Account">
          <Avatar
            sx={{ marginBottom: "3rem", color: "white" }}
            alt=""
            src="https://in.images.search.yahoo.com/search/images;_ylt=AwrKGBaZQlNkHGgJIc67HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?p=unknown+profile+image&type=E210IN714G0&ei=UTF-8&fr=mcafee&th=108.1&tw=159.7&imgurl=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F114-1149847_avatar-unknown-dp.png&rurl=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2q8u2w7e6r5o0o0_avatar-unknown-dp%2F&size=22KB&name=Avatar+-+Unknown+Dp+-+Free+Transparent+PNG+Download+-+PNGkey&oid=4&h=557&w=820&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cphbUmdFsam1huiAHaOnGwHaFB%26pid%3DApi%26rs%3D1%26c%3D1%26qlt%3D95%26w%3D159%26h%3D108&tt=Avatar+-+Unknown+Dp+-+Free+Transparent+PNG+Download+-+PNGkey&sigr=wnaydK0ZvBPb&sigit=r4U_mnIC7KMB&sigi=zKTdtMwBSrTp&sign=RJi9aZCwG40b&sigt=RJi9aZCwG40b"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Head;
