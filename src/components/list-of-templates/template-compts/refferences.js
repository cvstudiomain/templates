import { Fragment } from "react";

const Refferences = ({ refferences }) => {
  const reffMackup = refferences?.map((reffItem) => {
    const { name, organization, email } = reffItem;
    return (
      <Fragment key={email}>
        <p className="refName shouldNotBreak">{name}</p>

        <p className="titleandorg shouldNotBreak text-sm">{organization}</p>

        <p className="email shouldNotBreak text-sm">{email}</p>
      </Fragment>
    );
  });
  return (
    <Fragment>
      {refferences?.length > 0 ? (
        <>
          <div className="infor-tittle">
            <h3>Refrence</h3>
          </div>
          {reffMackup}
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Refferences;
