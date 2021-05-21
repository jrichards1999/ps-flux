import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  debugger;
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
