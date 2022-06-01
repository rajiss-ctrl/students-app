import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/Courses.css'

const Courses = ({course}) => {
  const navigate = useNavigate();

  function handleDetail(e){
    // console.log(e.name)
    // sessionStorage.setItem('courseDetails',e);
    sessionStorage.setItem('courseDetails',JSON.stringify(e))
 navigate('/coursedetails')
// .details.intro
  }

  return (
  <div className='courses-container'>
  <h2>Our Courses</h2>
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
           <Link to='/dashboard'> -- Back</Link>
    </div></div >
  )
}

export default Courses