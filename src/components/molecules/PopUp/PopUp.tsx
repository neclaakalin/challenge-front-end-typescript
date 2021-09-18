import React, { FunctionComponent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { PostType } from "../../../types";
import Card from "../../atoms/Card/Card";
import styles from "./PopUp.module.scss";

type PopUpProps = {
  fields: PostType;
  onChange: (field: string, value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
};

const PopUp: FunctionComponent<PopUpProps> = (props) => {
  const wrapperRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, props]);

  return (
    <div className={styles.popUpContainer}>
      <div ref={wrapperRef} className={styles.wrapper}>
        <Card hard>
          <Card.Header>
            <textarea
              name="title"
              value={props.fields.title}
              placeholder="Title"
              className={styles.header}
              onChange={(e) => props.onChange("title", e.target.value)}
              rows={1}
            ></textarea>
          </Card.Header>
          <Card.Description>
            <textarea
              name="body"
              value={props.fields.body}
              placeholder="Enter description"
              className={styles.description}
              onChange={(e) => props.onChange("body", e.target.value)}
              rows={3}
            ></textarea>
          </Card.Description>
          <Card.Footer>
            <b>UserId: </b>
            <input
              type="number"
              value={props.fields.userId < 0 ? undefined : props.fields.userId}
              onChange={(e) => props.onChange("userId", e.target.value)}
              placeholder="0"
              min="0"
            ></input>
          </Card.Footer>
        </Card>
        <div>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              color: "#656565",
              margin: "2%",
              borderRadius: "10px",
            }}
            onClick={() => props.onClose()}
          />
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              color: "#fff",
              margin: "2%",
            }}
            onClick={() => props.onSubmit()}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
