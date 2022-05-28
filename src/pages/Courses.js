import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Courses.css'

const Courses = ({course}) => {
  console.log(course)
  const navigate = useNavigate();

  function handleDetail(e){
    // console.log(e.name)
 navigate(`/coursedetails/${e .details.intro}`)
//  .details.intro
//  <Link to={`/analysis/${title}`}>
  }

  return (
    <div className='courses-wrapper' >
    {course?.map((item)=>{
        return (
          <div key={item.id} className="courses" onClick={()=>{handleDetail(item)}}>
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