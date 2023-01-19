import React, { Fragment, useEffect, useRef, useState } from "react";

import Skills from "./template-compts/skills";
import Certifications from "./template-compts/certifications";
import Hobbies from "./template-compts/hobbies";
import SocialLinks from "./template-compts/socialLinks";
import Refferences from "./template-compts/refferences";
import ParsonalInfor from "./template-compts/parsonalData";
import UserNameAndProf from "./template-compts/userNameAndProfession";
import Profile from "./template-compts/profile";
import Experiences from "./template-compts/experiences";
import Educations from "./template-compts/education";
import Languages from "./template-compts/languages";
import UserPhoto from "./template-compts/userPhoto";
const Resume4 = ({ initialState }) => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const tinyRef = useRef(null);
  const largeRef = useRef(null);
  const tinyInnerR = useRef(null);
  const largeInnerR = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const div = containerRef.current;

      const largeDiv = largeRef.current;
      const tinyDiv = tinyRef.current;
      const largeInnerDiv = largeInnerR.current;
      const tinyInnerDiv = tinyInnerR.current;

      function moveContent() {
        if (
          tinyInnerDiv?.scrollHeight > tinyInnerDiv?.offsetHeight ||
          largeInnerDiv?.scrollHeight > largeInnerDiv?.offsetHeight
        ) {
          // console.log("true");
          // The first div has overflowed, so create a new div with the same dimensions as the first div
          const newDiv = document?.createElement("div");
          const newTinyDiv = document?.createElement("div");
          const newLargeDiv = document?.createElement("div");
          const newTinyInnerDiv = document?.createElement("div");
          const newLargeInnerDiv = document?.createElement("div");
          newLargeDiv.className = largeDiv.className;
          newTinyDiv.className = tinyDiv.className;
          newTinyInnerDiv.className = tinyInnerDiv.className;
          newLargeInnerDiv.className = largeInnerDiv.className;
          newTinyDiv.style.minHeight = "100%";

          newLargeDiv.style.minHeight = "100%";

          newTinyInnerDiv.style.minHeight = "100%";

          newLargeInnerDiv.style.minHeight = "100%";
          newTinyDiv.appendChild(newTinyInnerDiv);
          newLargeDiv.appendChild(newLargeInnerDiv);
          newDiv.appendChild(newTinyDiv);
          newDiv.appendChild(newLargeDiv);

          newDiv.className = div.className;
          while (tinyInnerDiv.scrollHeight > tinyInnerDiv.offsetHeight) {
            // newDiv.appendChild(div.lastChild);
            newTinyInnerDiv.prepend(tinyInnerDiv.lastChild);
          }
          while (largeInnerDiv.scrollHeight > largeInnerDiv.offsetHeight) {
            // newDiv.prepend(div.lastChild);

            newLargeInnerDiv.prepend(largeInnerDiv.lastChild);
          }
          if (newLargeInnerDiv.firstChild) {
            newLargeInnerDiv.firstChild.style.marginTop = "0";
            newLargeDiv.style.paddingTop = "3rem";
          }
          if (newTinyInnerDiv.firstChild) {
            newTinyInnerDiv.firstChild.style.marginTop = "0";

            newTinyDiv.style.paddingTop = "3rem";
            newTinyDiv.style.marginTop = "0";
            newTinyDiv.style.borderRadius = "0";
          }

          // Insert the second div after the first div
          div.parentNode.insertBefore(newDiv, div.nextSibling);
          if (only1page) newDiv.style.display = "none";
        }
      }

      // Call the moveContent function when the window is resized
      window.addEventListener("resize", moveContent);

      // Call the moveContent function when the component is mounted
      moveContent();

      // Return a cleanup function to remove the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", moveContent);
      };
    }, 500);
  });
  const {
    links,
    education,
    skills,
    hobies,
    templateName,
    summary,
    languages,
    introduction,
    experience,
    refferences,
    only1page,
    certifications,
  } = initialState;
  return (
    <div
      ref={containerRef}
      className={`template resume ${templateName} style-adjuster`}
    >
      <div className="template-header">
        <UserPhoto profile_image={introduction.profile_image} />
        <UserNameAndProf
          firstname={introduction.firstname}
          lastname={introduction.lastname}
          job_title={introduction.job_title}
          professionTop={true}
        />
      </div>

      <div className="tiny-content" ref={tinyRef}>
        <div className="tiny-inner" ref={tinyInnerR}>
          <ParsonalInfor introduction={introduction} />
          <SocialLinks links={links} />
          <Skills skills={skills} />
          <Hobbies hobies={hobies} />
          <Languages languages={languages} />
          <Refferences refferences={refferences} />
        </div>
      </div>
      <div className="large-content" ref={largeRef}>
        <div className="large-inner" ref={largeInnerR}>
          <Profile summary={summary} />
          <Experiences experiences={experience} />
          <Educations educations={education} />
          <Certifications certifications={certifications} />
        </div>
      </div>
    </div>
  );
};

export default Resume4;
