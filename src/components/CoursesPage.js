import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi"; //Lets us call mock api and get list of courses
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]); //Inside useState declare default value. In this case it's an empty array.

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []); //Empty dependency array means only run ONCE.

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
