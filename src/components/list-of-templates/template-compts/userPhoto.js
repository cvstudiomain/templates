import { Fragment } from "react";

const UserPhoto = ({ profile_image }) => {
  return (
    <Fragment>
      {profile_image && (
        <div className="passport-box">
          <img
            src={profile_image}
            alt=""
            className="passport"
            crossOrigin="anonymous"
          />
        </div>
      )}
    </Fragment>
  );
};

export default UserPhoto;
