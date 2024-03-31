import { GetUserInfoTest } from "api/GetUserInfo";
import useAsync from "hook/useAsync";
import styles from "./Nav.module.css";
import Link from "next/link";

const { useEffect, useState } = require("react");

interface Props{
  data: [];
  error?: {
    message: string;
  }
}

const Nav = () => {
  const [user, setUser] = useState({});
  const [loading, error, asyncedGetUser] = useAsync(GetUserInfoTest);

  const loadUserInfo = async (data: Props) => {
    const userData = await asyncedGetUser(data);
    setUser(userData.data[0]);
  };

  useEffect((data:Props) => {
    loadUserInfo(data);
  }, []);



  return (
    <>
      <div className={styles["nav"]}>
        <div className={styles["navContainer"]}>
          <div className={styles["navLogo"]}>
            <Link href="/">
              <img src="/header-logo.svg" alt="nav로고" />
            </Link>
          </div>
          {user && Object.keys(user).length > 0 ? (
            <>
              <div className={styles["userProfile"]}>
                <img
                  className={styles["userImg"]}
                  src={user.image_source}
                  alt="로그인시 유저프로필이미지"
                />
                <span className={styles["userEmail"]}>{user.email}</span>
              </div>
            </>
          ) : (
            <a href="/signin" className={styles["loginBtn"]}>
              로그인
            </a>
          )}
        </div>
      </div>
      {error && <div>{error.message}</div>}
    </>
  );
};

export default Nav;
