import React, { FunctionComponent, useEffect, useState } from "react";
import { AxiosError } from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { PostType, UserType, postTypeInitials } from "./types";
import { getPosts, getUsers, updatePost, addPost } from "./utils/services";
import Card from "./components/atoms/Card/Card";
import BitterLogo from "./components/atoms/BitterLogo/BitterLogo";
import PopUp from "./components/molecules/PopUp/PopUp";
import Alert from "./components/molecules/Alert/Alert";
import styles from "./App.module.scss";

const App: FunctionComponent = () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [page, setPage] = useState<number>(1);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [currentPost, setCurrentPost] = useState<number>();
  const [editAddFields, setEditAddFields] = useState<PostType>({
    ...postTypeInitials,
  });

  useEffect(() => {
    getPosts()
      .then((res) => {
        const posts: Array<PostType> = res.data;
        setPosts([...posts]);
        setLoaded(true);
      })
      .catch((err: AxiosError) => {
        setError(true);
        setMessage("Couldn't load the posts");
        setLoaded(true);
        return;
      });

    getUsers()
      .then((res) => {
        const users: Array<UserType> = res.data;
        setUsers([...users]);
        setLoaded(true);
      })
      .catch((err: AxiosError) => {
        setError(true);
        setMessage("Couldn't load the users");
        setLoaded(true);
        return;
      });
    // send to get posts
  }, []);

  const handleChangePage = (_: any, value: number) => {
    setPage(value);
  };

  const handleEditAddFieldChange = (field: string, value: string | number) => {
    const oldEditAddFields = editAddFields;
    (oldEditAddFields as any)[field] = value;
    setEditAddFields({ ...oldEditAddFields });
  };

  const handleEditAddFieldSubmit = () => {
    if (showPopup === "Add") {
      console.log("in add");
      addPost(editAddFields)
        .then(() => {
          setError(false);
          setMessage("Successfully added the post");
          closePopUp();
        })
        .catch((err: AxiosError) => {
          setError(true);
          setMessage("Couldn't add the post");
          closePopUp();
        });
    } else {
      updatePost(currentPost, editAddFields)
        .then(() => {
          setError(false);
          setMessage("Successfully edited the post");
          closePopUp();
        })
        .catch((err: AxiosError) => {
          setError(true);
          setMessage("Couldn't edit the post");
          closePopUp();
        });
    }
    // submit
  };

  const openPopUp = (type: string, post_id?: number) => {
    if (type === "Add") {
      setEditAddFields({ ...postTypeInitials });
    } else {
      const currentPost = posts.find((p) => p.id === post_id);
      setCurrentPost(post_id);
      if (currentPost) setEditAddFields({ ...currentPost });
    }
    setShowPopup(type);
  };

  const closePopUp = () => {
    setShowPopup("");
  };

  const handleUnmountAlert = () => {
    setMessage("");
    setError(false);
  };

  return (
    <div className={styles.App}>
      {message && (
        <Alert message={message} red={error} onUnmount={handleUnmountAlert} />
      )}
      <div className={styles.addNewPost} onClick={() => openPopUp("Add")}>
        <FontAwesomeIcon icon={faPlus} color="#fff" size="2x" />
      </div>
      {showPopup && (
        <PopUp
          fields={editAddFields}
          onChange={handleEditAddFieldChange}
          onClose={closePopUp}
          onSubmit={handleEditAddFieldSubmit}
        />
      )}
      <BitterLogo />
      {loaded && (
        <>
          {posts.slice((page - 1) * 10, page * 10).map((post) => {
            return (
              <Card key={post.id}>
                <Card.Header>
                  {post.title}
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{ color: "#8d11a8", marginLeft: "2%" }}
                    onClick={() => openPopUp("edit", post.id)}
                  />
                </Card.Header>
                <Card.Description>{post.body}</Card.Description>
                <Card.Footer>
                  <i>posted by: </i>
                  <b>
                    {users.find((user) => user.id === post.userId)?.username}
                  </b>
                </Card.Footer>
              </Card>
            );
          })}
          <div className={styles.paginationContainer}>
            <Pagination count={100} page={page} onChange={handleChangePage} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
