import React from 'react'
import { useStudent} from './Studentcontextprovider'

export default function StudentDeatilsView() {
  const { studentlist, setstudentlist, currentindex, setcurrentindex } =useStudent();
  const student = currentindex !== null ? studentlist[currentindex]:null
  return (
    <>
    <div className='card  '>
      <div className='card-header'>
        Student Details
      </div>
      <div className='card-body'>
        {student ? (
          <div>
            <p> Name: {student.name}</p>
            <p> Roll No: {student.roll}</p>
            <p> Percentage: {student.percentage}</p>
          </div>
        ) : (
          <p>Click on a student to view details</p>
        )}
      </div>
    </div>
    </>
  )
}
