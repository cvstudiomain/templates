import { Fragment, useState, useEffect } from "react";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { display } from "./validateObjects";

const SocialLinks = ({ links }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    links.forEach((item) => {
      display(item) && setShow(true);
    });
  });
  const linkMackup = links?.map((linkItem) => {
    const { label, link } = linkItem;

    switch (label) {
      case "facebook":
        return (
          <div className="information" key={link}>
            <p className="inforLabel">
              <BsFacebook />
            </p>

            <p className="inforVal">{link}</p>
          </div>
        );

      case "instagram":
        return (
          <div className="information" key={link}>
            <p className="inforLabel">
              <BsInstagram />
            </p>

            <p className="inforVal">{link}</p>
          </div>
        );

      case "twitter":
        return (
          <div className="information" key={link}>
            <p className="inforLabel">
              <BsTwitter />
            </p>

            <p className="inforVal">{link}</p>
          </div>
        );

      case "linkedin":
        return (
          <div className="information" key={link}>
            <p className="inforLabel">
              <BsLinkedin />
            </p>

            <p className="inforVal">{link}</p>
          </div>
        );
      case "github":
        return (
          <div className="information" key={link}>
            <p className="inforLabel">
              <BsGithub />
            </p>

            <p className="inforVal">{link}</p>
          </div>
        );

      default:
        return "";
    }
  });
  return (
    <Fragment>
      {links?.length > 0 && show && (
        <>
          <div className="infor-tittle">
            <h3>Social media links</h3>
          </div>
          {linkMackup}
        </>
      )}
    </Fragment>
  );
};

export default SocialLinks;
