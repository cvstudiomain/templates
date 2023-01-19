const UserNameAndProf = ({ professionTop, firstname, lastname, job_title }) => {
  return (
    <>
      {professionTop && <p className="profession">{job_title}</p>}
      <div className="user-name-and-profession min-w-full">
        <h1 className="user-name">{firstname + " " + lastname}</h1>
        {!professionTop && <p className="profession">{job_title}</p>}
      </div>
    </>
  );
};

export default UserNameAndProf;
