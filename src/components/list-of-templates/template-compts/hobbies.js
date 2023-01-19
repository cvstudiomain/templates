import { Fragment } from "react";

const Hobbies = ({ hobies }) => {
  const hobiesMackup = hobies?.map((item) => {
    return (
      <ul className="" key={item}>
        <li>{item}</li>
      </ul>
    );
  });
  return (
    <Fragment>
      {hobies?.length > 0 && (
        <>
          <div className="infor-tittle">
            <h1>Hobbies</h1>
          </div>
          {hobiesMackup}
        </>
      )}
    </Fragment>
  );
};

export default Hobbies;
