import React, { useState, useEffect } from "react";
import axios from "axios";
import ResumeContainer from "./resumeContainer";
function Resumes(props) {
  const [resumesState, setResumesState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:5000/user/resumes");
      setResumesState(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    })();
  }, []);
  const resumesMackup = () => {
    const mackup = resumesState?.map((resumeData) => {
      if (!resumeData.templateName || resumeData.templateName === "")
        resumeData.templateName = "template1";
      return <ResumeContainer key={resumeData._id} initialState={resumeData} />;
    });
    console.log(mackup);
    return mackup;
  };
  return <div>{loading ? "loading..." : resumesMackup()}</div>;
}

export default Resumes;
