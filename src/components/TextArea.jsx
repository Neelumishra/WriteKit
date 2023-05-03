import styles from "./TextArea.module.css";

const TextArea = () => {
  return (
    <div className={styles.container}>
      <div
        contentEditable
        className={styles.main}
        data-placeholder="Type @ to insert"
      ></div>
    </div>
  );
};

export default TextArea;
