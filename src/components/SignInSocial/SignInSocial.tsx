import styles from "./SignInSocial.module.css";
import Image from "next/image";
import Link from "next/link";

function SignInSocial() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.socialText}>소셜 로그인</div>
      <div className={styles.socialLogin}>
        <Link
          className={styles.socialImg}
          href="https://www.google.com/"
          target="_blank"
        >
          <Image
            src="/images/google.svg"
            width={42}
            height={42}
            alt="구글 로그인"
          />
        </Link>
        <Link
          className={styles.socialImg}
          href="https://www.kakaocorp.com/page/"
          target="_blank"
        >
          <Image
            src="/images/kakaotalk.svg"
            width={42}
            height={42}
            alt="카카오톡 로그인"
          />
        </Link>
      </div>
    </div>
  );
}

export default SignInSocial;
