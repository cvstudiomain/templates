import { Fragment } from "react";

const Profile = ({ summary }) => {
  return (
    <Fragment>
      {summary ? (
        <>
          <div className="infor-tittle " style={{ marginTop: "0" }}>
            <h3>Profile</h3>
          </div>
          <div className="profile informationContainer">
            <p>{summary}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Profile;
