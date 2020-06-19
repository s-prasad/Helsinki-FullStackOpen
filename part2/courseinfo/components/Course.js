import React from 'react'

const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

const Part = (props) => {
  const {id, part} = props
    
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const CourseDisplay = (props) => {
    const {id, course} = props
    
    return (
        <div>
            <Header name={course.name} />
            {course.parts.map(part => <Part key={part.id} part={part} />)}
            <b>Total of {course.parts.reduce((acc, curr) => acc+curr.exercises, 0)} exercises</b>
        </div>
    
    )
}

const Course = ({ courses }) => {
    
    return (
        <div>
            {courses.map(course => <CourseDisplay key={course.id} course={course} />)} 
        </div>
    )
}

export default Course
