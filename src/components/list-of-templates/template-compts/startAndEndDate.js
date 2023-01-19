import { Fragment } from "react";

const StartAndEnd = ({ start_date, end_date }) => {
  // console.log(start_date, end_date);
  return (
    <Fragment>
      {(start_date || end_date) && (
        <div className="start-and-end-date shouldNotBreak">
          {start_date && (
            <>
              <p className="start">{start_date}</p>
              <p>to</p>
            </>
          )}
          {end_date && <p className="end">{end_date}</p>}
        </div>
      )}
    </Fragment>
  );
};

export default StartAndEnd;
