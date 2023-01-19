import ResumeContainer from "./resumeContainer";
import { initialState } from "./initialState";
import "./templates.css";
const ResumeTemplates = () => {
  const templatesMackup = () => {
    const templates = [];
    for (let i = 1; i <= 8; i++) {
      templates.push(`template${i}`);
    }

    return templates.map((templateName) => {
      initialState.templateName = templateName;
      return (
        <div className="resume-templates-wrapper" key={templateName}>
          <ResumeContainer
            initialState={{
              ...initialState,

              only1page: true,
            }}
          />
        </div>
      );
    });
  };
  return <div className="resume-sample-templates">{templatesMackup()}</div>;
};

export default ResumeTemplates;
