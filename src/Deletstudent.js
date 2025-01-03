import React from "react";
import { useStudent } from "./Studentcontextprovider";
import StudentListView from "./StudentListView";
export default function Deletstudent() {
  const { studentlist, setstudentlist, currentindex, setcurrentindex } =
    useStudent();
  const handleDelete = (index) => {
    const newStudentList = studentlist.filter((_, i) => i !== index);
    setstudentlist(newStudentList);
  };
  return (
    <>
   <div className="container w-50">
  <div className="card container mt-5 shadow border mb-5 pt-3">
         <div className="row mb-2 ">
         {studentlist.map((item,index) => (
           <>
            <div className="col-md-6 mt-2 ">
            <span className=""> {item.name}</span></div>       
            <div className="col-md-6 mt-2 ">
            <button onClick={() => handleDelete(index)} className="btn btn-primary " style={{float:'right'}}>Delet</button>

                </div>      
           </>
          ))}
         </div>
      </div>
  </div>
    </>
  );
}
 