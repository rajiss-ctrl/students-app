import React from 'react'
import { Link } from 'react-router-dom'
import './css/CoursesDetails.css'

const CourseDetails = () => {
let data = JSON.parse(sessionStorage.getItem('courseDetails'))
console.log(data)
  return (
    <div className='coursedetails-wrapper'>
      
        			<div className='course-details'>
              
                <Link to='/courses'>Back</Link>
        				<h1>Introduction to {data.name}</h1>
        				<p>{data.details.intro}</p>
        				<div className='course-list'>
                  <h1>our branches</h1>
                  {data.details.branches.map((branch)=>{
                 return(
                    <ul key={branch.index}>
                      <li>{branch}</li>
                  </ul>
                 )
                })}
                </div>
        			</div>
       
    </div>
  )
}

export default CourseDetails