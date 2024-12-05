import React from 'react';

const CourseCard = ({ title, description, url }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Pogledajte kurs
      </a>
    </div>
  );
};

export default CourseCard;
