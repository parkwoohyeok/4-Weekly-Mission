import styles from "components/SignInput/SignInpupt.module.css";
import { useEffect, useRef, useState } from "react";

const SignInput = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [idInputFocused, setIdInputFocused] = useState(false);
  const [pwInputFocused, setPwInputFocused] = useState(false);
  const [isPasswordOpened, setIsPasswordOpened] = useState(false);
  const [isIdError, setIsIdError] = useState("");
  const [isPwError, setIsPwError] = useState("");
  const PasswordInputRef = useRef(null);
  const IdInputRef = useRef(null);

  const handleIdInputFocused = () => {
    setIdInputFocused(true);
  };

  const handlePwInputFocused = () => {
    setPwInputFocused(true);
  };

  const handleEyeButtonClicked = (e) => {
    e.preventDefault();
    if (isPasswordOpened) {
      PasswordInputRef.current.type = "text";
      return setIsPasswordOpened(false);
    }
    PasswordInputRef.current.type = "password";
    return setIsPasswordOpened(true);
  };

  const handleIdInputChange = (e) => {
    setIdValue(e.target.value);
  };

  const handlePwInputChange = (e) => {
    setPwValue(e.target.value);
  };

  useEffect(() => {
    if (IdInputRef.current) {
      IdInputRef.current.addEventListener("focusout", () => {
        const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
        if (!idValue.trim()) {
          return setIsIdError("이메일을 입력해 주세요.");
        }
        if (!EMAIL_REG_EXP.test(idValue.trim())) {
          return setIsIdError("올바른 이메일 주소가 아닙니다.");
        }
        return setIsIdError("");
      });
    }
  }, [idValue]);

  useEffect(() => {
    if (PasswordInputRef.current) {
      PasswordInputRef.current.addEventListener("focusout", () => {
        if (!pwValue.trim()) {
          return setIsPwError("비밀번호를 입력해 주세요.");
        }
        return setIsPwError("");
      });
    }
  }, [pwValue]);

  return (
    <form>
      <input
        className={`${styles.IdInput} ${idInputFocused ? styles.Focused : ""} ${
          isIdError ? styles.Error : ""
        }`}
        placeholder="내용 입력"
        onFocus={handleIdInputFocused}
        onChange={handleIdInputChange}
        value={idValue}
        ref={IdInputRef}
      />
      <div className={isIdError ? styles.Error : ""}>{isIdError}</div>

      <input
        className={`${styles.PwInput} ${pwInputFocused ? styles.Focused : ""} ${
          isPwError ? styles.Error : ""
        }`}
        ref={PasswordInputRef}
        placeholder="내용 입력"
        type="password"
        onFocus={handlePwInputFocused}
        onChange={handlePwInputChange}
        value={pwValue}
      />
      <div className={isPwError ? styles.Error : ""}>{isPwError}</div>
      <button onClick={handleEyeButtonClicked}>눈모양 버튼입니다</button>
    </form>
  );
};

export default SignInput;
