import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import courses from '../Components/courses';  // Importing courses data directly

const Kursevi = () => {
  const [courseList] = useState(courses);  // Storing courses data in state
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term

  // Filtering the courses based on the search term
  const filteredCourses = courseList.filter(course => {
    return course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           course.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="kursevi-container">
        <Navbar />
        <h2>Kursevi</h2>
        <p>Odaberite kurs koji želite</p>

        <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for courses..."
          onChange={(e)=>setSearchTerm(e.target.value)}
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
