import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import styles from "./Head.module.css";
import { Avatar } from "@mui/material";

const Head = () => {
  const options = [
    "File",
    "Edit",
    "View",
    "Insert",
    "Format",
    "Tools",
    "Extension",
    "Help",
    "...",
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
            <p>Untitled document</p>
            <div className={styles.headIcon}>
              <StarOutlineIcon />
              <DriveFileMoveIcon />
            </div>
          </div>
          <div className={styles.options}>
            {options.map((option, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                {option}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <CommentIcon />
        <VideocamIcon />
        <PersonAddAltIcon />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
};

export default Head;
