import { useEffect, useState } from "react";
import { display } from "./validateObjects";

const ParsonalInfor = ({ introduction, noTitle }) => {
  const [show, setShow] = useState(false);
  const {
    email,
    phone_number,
    country,
    city,
    address,
    date_of_birth,
    postal_code,
  } = introduction;
  useEffect(() => {
    display(introduction) && setShow(true);
  });
  return (
    <>
      {show && (
        <>
          {!noTitle && (
            <>
              <div className="infor-tittle">
                <h3>Personal infor</h3>
              </div>

              {address && (
                <div className="information">
                  <p className="inforLabel">
                    <i
                      className="fa fa-map-marker infor-logo"
                      aria-hidden="true"
                    ></i>
                  </p>
                  <p className="inforVal">{address}</p>
                </div>
              )}
              {date_of_birth && (
                <div className="information">
                  <p className="inforLabel">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                  </p>

                  <p className="inforVal">{date_of_birth}</p>
                </div>
              )}
              {postal_code && (
                <div className="information">
                  <p className="inforLabel">
                    <i className="fa fa-compass" aria-hidden="true"></i>
                  </p>

                  <p className="inforVal">{postal_code}</p>
                </div>
              )}
            </>
          )}
          {country && (
            <div className="information">
              <p className="inforLabel">
                <i
                  className="fa fa-flag-checkered infor-logo"
                  aria-hidden="true"
                ></i>
              </p>

              <p className="inforVal">{country}</p>
            </div>
          )}
          {city && (
            <div className="information">
              <p className="inforLabel">
                <i className="fa fa-home infor-logo" aria-hidden="true"></i>
              </p>

              <p className="inforVal">{city}</p>
            </div>
          )}

          {phone_number && (
            <div className="information">
              <p className="inforLabel">
                <i
                  className="fa fa-phone-square infor-logo"
                  aria-hidden="true"
                ></i>
              </p>
              <p className="inforVal">{phone_number}</p>
            </div>
          )}
          {email && (
            <div className="information">
              <p className="inforLabel">
                <i className="fa fa-envelope infor-logo" aria-hidden="true"></i>
              </p>
              <p className="inforVal">{email}</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ParsonalInfor;
