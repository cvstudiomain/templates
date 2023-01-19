import { Fragment, useState, useEffect } from "react";
import { display } from "./validateObjects";

const Skills = ({ skills }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    skills.forEach((item) => {
      display(item) && setShow(true);
    });
  });
  const skillsMackup = skills?.map((skillItem) => {
    const { skill, level } = skillItem;

    return (
      <div key={skill} className="w-full">
        <p>{skill}</p>
        <div
          className={
            "mt-1 mb-2 h-2 flex level-container items-center rounded-md min-w-full bg-white overflow-hidden"
          }
        >
          <div className={"level h-1  "} style={{ width: level }}></div>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      {skills?.length > 0 && show && (
        <>
          <div className="infor-tittle">
            <h1>Skills</h1>
          </div>
          {skillsMackup}
        </>
      )}
    </Fragment>
  );
};

export default Skills;
