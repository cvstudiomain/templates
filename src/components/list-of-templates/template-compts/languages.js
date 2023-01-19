import { Fragment, useEffect, useState } from "react";
import { display } from "./validateObjects";
const Languages = ({ languages }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    languages.forEach((item) => {
      display(item) && setShow(true);
    });
  });
  const languageMackup = languages?.map((langItem) => {
    const { language, level } = langItem;
    return (
      <div key={language} className="w-full">
        <p>{language}</p>
        <div
          className={
            "mt-1 mb-2 h-2 w-full level-container flex items-center rounded-md bg-white overflow-hidden"
          }
        >
          <div className={"level h-1"} style={{ width: level }}></div>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      {languages?.length > 0 && show ? (
        <>
          <div className="infor-tittle">
            <h3>Languages</h3>
          </div>
          {languageMackup}
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Languages;
