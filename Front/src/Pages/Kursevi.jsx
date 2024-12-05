import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import courses from "../Components/courses";
import Hero from "../Components/Hero";

const Kursevi = () => {
  const [courseList] = useState(courses);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courseList.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div className="kursevi-container">
        <Navbar />
        <div className="hero-section">
          <div className="Hero2"></div>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for courses..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>

        <div className="courses-list">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} className="course-item">
                <h3 className="course-title">{course.title}</h3>
                <p>{course.description}</p>
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  Pogledajte kurs
                </a>
              </div>
            ))
          ) : (
            <p>No courses available at the moment.</p>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Kursevi;
