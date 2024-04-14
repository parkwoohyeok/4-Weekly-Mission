import styles from "components/SignInHeader/SignInHeader.module.css";
import Image from "next/image";
import Link from "next/link";

function SignInHeader() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={210}
          height={38}
          className={styles.logo}
          alt="로고 이미지"
        />
      </Link>
      <div className={styles.noSignup}>
        회원이 아니신가요?{" "}
        <Link className={styles.signup} href="/signup">
          회원 가입하기
        </Link>
      </div>
    </div>
  );
}

export default SignInHeader;
