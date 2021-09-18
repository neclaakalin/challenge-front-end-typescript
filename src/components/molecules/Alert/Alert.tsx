import React, { FunctionComponent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Alert.module.scss";

type AlertProps = {
  red?: boolean;
  message: string;
  onUnmount: () => void;
};

const Alert: FunctionComponent<AlertProps> = (props) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 10000);
  }, []);

  useEffect(() => {
    if (hide) {
      setTimeout(() => {
        props.onUnmount();
      }, 250);
    }
  }, [hide, props]);

  const handleIconClose = () => {
    setHide(true);
  };

  return (
    <div
      className={`${styles.alertContainer} ${props.red ? styles.error : ""} ${
        hide ? styles.hide : ""
      }`}
    >
      <p className={styles.message}>{props.message}</p>
      <div className={styles.icon} onClick={() => handleIconClose()}>
        <FontAwesomeIcon icon={faTimes} color="#fff" />
      </div>
    </div>
  );
};

export default Alert;
