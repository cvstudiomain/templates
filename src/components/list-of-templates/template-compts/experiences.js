import { Fragment, useEffect, useState } from "react";
import StartAndEnd from "./startAndEndDate";
import { display } from "./validateObjects";

const Experiences = ({ experiences }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    experiences.forEach((element) => {
      display(element) && setShow(true);
    });
  }, []);
  const expMackup = experiences?.map((exp) => {
    const {
      id,
      start_date,
      end_date,
      job_title,
      employer,
      location,
      description,
    } = exp;

    return (
      <Fragment key={id}>
        <StartAndEnd start_date={start_date} end_date={end_date} />
        {(job_title !== "" || employer !== "" || location !== "") && (
          <div className="box-for-title-and-org shouldNotBreak">
            <div className="flex flex-row gap-2">
              {job_title !== "" && (
                <>
                  <p className="jobtitle">{job_title}</p> <p>-</p>
                </>
              )}
              <p className="compeny">{employer}</p>
            </div>
            <div className="box-for-location">
              <p className="location">{location}</p>
            </div>
          </div>
        )}

        {description}
      </Fragment>
    );
  });
  return (
    <Fragment>
      {experiences?.length > 0 && show ? (
        <>
          <div className="infor-tittle not-require-space">
            <h3>Experience</h3>
          </div>
          {expMackup}
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Experiences;
