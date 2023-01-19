import React, { useRef, useEffect, useState, Fragment } from "react";
import Resume1 from "./list-of-templates/resume1";
import Resume2 from "./list-of-templates/resume2";
import Resume3 from "./list-of-templates/resume3";
import Resume4 from "./list-of-templates/resume4";
import Resume5 from "./list-of-templates/resume5";
import Resume6 from "./list-of-templates/resume6";
import Resume7 from "./list-of-templates/resume7";
import Resume8 from "./list-of-templates/resume8";
function ResumeContainer({ initialState }) {
  const { templateName, templates } = initialState;

  return (
    <>
      {templateName === "template1" && <Resume1 initialState={initialState} />}
      {templateName === "template2" && <Resume2 initialState={initialState} />}
      {templateName === "template3" && <Resume3 initialState={initialState} />}
      {templateName === "template4" && <Resume4 initialState={initialState} />}
      {templateName === "template5" && <Resume5 initialState={initialState} />}
      {templateName === "template6" && <Resume6 initialState={initialState} />}
      {templateName === "template7" && <Resume7 initialState={initialState} />}
      {templateName === "template8" && <Resume8 initialState={initialState} />}
    </>
  );
}

export default ResumeContainer;
