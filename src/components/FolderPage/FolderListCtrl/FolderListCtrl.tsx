import styles from "./FolderListCtrl.module.css";
import { MouseEvent } from "react";

interface Props {
  folderName: string;
  setModal: (value: string) => void;
}

const FolderListCtrl = ({ folderName, setModal }: Props) => {
  const handleModalClick = (e: MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    setModal(value);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles.container}>
        <div className={styles.folderName}>{folderName}</div>
        {folderName === "전체" || (
          <div className={styles.controlMenu}>
            <div className={styles.controlMenuItem}>
              <img src="/share.svg" alt="shareIconImage" />
              <button value="shareFolder" onClick={handleModalClick}>
                공유
              </button>
            </div>
            <div className={styles.controlMenuItem}>
              <img src="/pen.svg" alt="penIconImage" />
              <button value="changeFolderName" onClick={handleModalClick}>
                이름 변경
              </button>
            </div>
            <div className={styles.controlMenuItem}>
              <img src="/delete.svg" alt="deleteIconImage" />
              <button value="deleteFolder" onClick={handleModalClick}>
                삭제
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderListCtrl;
