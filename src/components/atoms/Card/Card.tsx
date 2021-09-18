import React, { FunctionComponent } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  hard?: boolean;
};

const Header: FunctionComponent = (props): JSX.Element => (
  <div className={styles.bitterCardHeader}>{props.children}</div>
);

const Description: FunctionComponent = (props): JSX.Element => (
  <div className={styles.bitterCardDescription}>{props.children}</div>
);

const Footer: FunctionComponent = (props): JSX.Element => (
  <div className={styles.bitterCardFooter}>{props.children}</div>
);

const Card: FunctionComponent<CardProps> & { Header: FunctionComponent } & {
  Description: FunctionComponent;
} & { Footer: FunctionComponent } = (props) => {
  return (
    <div
      className={`${styles.bitterCardContainer} ${
        props.hard ? styles.withoutShadow : ""
      }`}
    >
      {props.children}
    </div>
  );
};

Card.Header = Header;
Card.Description = Description;
Card.Footer = Footer;

export default Card;
