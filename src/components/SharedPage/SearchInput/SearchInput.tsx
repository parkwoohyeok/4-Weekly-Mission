import styles from "./SearchInput.module.css";
import { ChangeEvent } from "react";




interface Props {
  loadingError: {
    message: string;
  }
  search: string;
  handleSearchChange: (e: ChangeEvent) => void;
  handleCloseClick: (e: React.MouseEvent) => void;

}

const SearchInput = ({ loadingError, search, handleSearchChange, handleCloseClick } : Props) => {
  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["search-section"]}>
          <div className={styles["search-inputbox"]}>
            <img src="/Search.png" alt="검색 아이콘" />
            <input
              type="text"
              name="searchInput"
              value={search}
              placeholder="링크를 검색해 보세요."
              onChange={handleSearchChange}
            />
          </div>
           <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src="/close.png" alt="닫힘버튼" />
        </button>
        </div>
        {loadingError && <div>{loadingError.message}</div>}
      </div>
    </>
  );
};

export default SearchInput;
