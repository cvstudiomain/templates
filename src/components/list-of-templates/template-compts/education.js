import { Fragment, useEffect, useState } from "react";
import StartAndEnd from "./startAndEndDate";
import { display } from "./validateObjects";
const Educations = ({ educations }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    educations.forEach((item) => {
      display(item) && setShow(true);
    });
  });
  const eduMackup = educations?.map((eduItem) => {
    // console.log(eduItem);
    const {
      school,

      degree,
      location,
      description,
      id,
      start_date,
      end_date,
    } = eduItem;
    // console.log(location);
    return (
      <Fragment key={id}>
        <StartAndEnd start_date={start_date} end_date={end_date} />

        {degree !== "" && <span>{degree}</span>}
        {description !== "" && <span>{description}</span>}

        {(school !== "" || location !== "") && (
          <div className="flex flex-row gap-1">
            {school !== "" && (
              <>
                <span>{school}</span>
                <span>-</span>
              </>
            )}
            {location !== "" && <span>{location}</span>}
          </div>
        )}
      </Fragment>
    );
  });
  return (
    <Fragment>
      {educations?.length > 0 && show && (
        <>
          <div className="infor-tittle not-require-space">
            <h3>Education</h3>
          </div>

          {eduMackup}
        </>
      )}
    </Fragment>
  );
};

export default Educations;
