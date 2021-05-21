import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi"; //Lets us call mock api and get list of courses
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]); //Inside useState declare default value. In this case it's an empty array.

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []); //Empty dependency array means only run ONCE.

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
