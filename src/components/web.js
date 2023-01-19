import React from "react";
import ResumeContainer from "./resumeContainer";
import { initialState } from "./initialState";
export default function Web() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ResumeContainer initialState={initialState} />
    </div>
  );
}
