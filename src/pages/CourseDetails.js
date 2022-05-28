import React from 'react'
import { useParams } from 'react-router-dom'
import './css/CoursesDetails.css'

const CourseDetails = () => {
 const { e} = useParams();


  return (
    <div className='coursedetails-wrapper'>
        <h1>{e}</h1>
    </div>
  )
}

export default CourseDetails