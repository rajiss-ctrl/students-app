import React from 'react'
import './css/Courses.css'

const Courses = ({course}) => {
  console.log(course)
  return (
    <div className='courses-wrapper'>
    {course?.map((item)=>{
        return (
          <div key={item.id} className="courses">
            <div className="card">
              <h4>{item.name}</h4>
            </div>
        </div>
        )
      })}

    </div>
  )
}

export default Courses