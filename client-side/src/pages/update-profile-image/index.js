import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import config from "../../utils/config";
import ChangeUser from "../../utils/change-user";
import UserContext from "../../context";

const UpdateProfileImagePage = () => {
  const [image, setImage] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();
  const params = useParams();

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: config.CloudName,
        uploadPreset: config.uploadPreset,
      },
      (error, result) => {
        if (result.event === "success") {
          setImage(result.info.url);
        }
      }
    );
    widget.open();
  };

  const handleSubmit = async () => {
    await ChangeUser(
      `http://localhost:9999/api/user/image/${params.userId}`,
      {
        imageUrl: image,
      },
      (user) => {
        context.logIn(user);
        history.push(`/my-profile/${user.id}`);
      },
      (e) => {
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles["inner-container"]}>
          <h1 className={styles.h1}>Change Your Profile Image</h1>
          {image !== "" ? (
            <img className={styles.image} src={image} alt="Profile image" />
          ) : null}
          <div>
            {image !== "" ? (
              <button onClick={handleSubmit}>Change Image</button>
            ) : (
              <button onClick={openWidget}>Upload Image</button>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UpdateProfileImagePage;
