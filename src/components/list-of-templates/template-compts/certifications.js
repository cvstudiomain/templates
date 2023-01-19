import { Fragment, useEffect, useState } from "react";
import StartAndEnd from "./startAndEndDate";
import { display } from "./validateObjects";

const Certifications = ({ certifications }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    certifications.forEach((item) => {
      display(item) && setShow(true);
    });
  });
  const certMackup = certifications?.map((certItem) => {
    const { id, start_date, end_date, description, certification_name } =
      certItem;
    return (
      <Fragment key={id}>
        <StartAndEnd start_date={start_date} end_date={end_date} />
        <div className="certification mb-2">
          <p className="font-[500]">{certification_name}</p>
          {/* <div className="mb-2">{description}</div> */}
        </div>
      </Fragment>
    );
  });
  return (
    <Fragment>
      {certifications.length > 0 && show && (
        <>
          <div className="infor-tittle">
            <h1>Certifications</h1>
          </div>
          {certMackup}
        </>
      )}
    </Fragment>
  );
};

export default Certifications;
