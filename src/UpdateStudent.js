import React from "react";
import { useStudent } from "./Studentcontextprovider";
import { useEffect } from "react";
export default function UpdateStudent() {
  const { studentlist, setstudentlist, currentindex, setcurrentindex } = useStudent();
  const [updatestudent, setupdatestudent] = React.useState({ name: '', roll: '', sub: '', percentage: '' });
  useEffect(() => {
    if (currentindex !== null) {
      setupdatestudent(studentlist[currentindex]);
    }
  }, [currentindex, studentlist]);

  const handleChange = (e) => {
    setupdatestudent({ ...updatestudent, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...studentlist];
    updatedList[currentindex] = updatestudent; 
    setstudentlist(updatedList);
    setupdatestudent({ name: '', roll: '', sub: '', percentage: '',m1:'',m2:'',m3:''});
    setcurrentindex(0);  
  };
 
  return (
    <div className="container-fluid w-100 mt-0" style={{overflow:'hidden'}}>
      <div className="card shadow p-4">
        <h2 className="text-center mb-4" style={{fontFamily:'monospace'}}>Update Student</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={updatestudent.name}
              onChange={handleChange}
              style={{color:updatestudent.name.length>10?'red':'green'}}
            />
            {updatestudent.name.length>10?<p style={{color:"red"}}>text shoud be less than 10 char</p>:null}
          </div>
          <div className="mb-3">
            <label htmlFor="roll" className="form-label">Roll</label>
            <input
              type="number"
              id="roll"
              className="form-control"
              value={updatestudent.roll}
              onChange={handleChange}
              style={{color:updatestudent.roll>50?'red':'green'}}
            />
            {updatestudent.roll>50?<p style={{color:"red"}}>Enter correct roll</p>:null}
          </div>
          <div className="mb-3">
            <label htmlFor="sub" className="form-label">English</label>
            <input
              type="text"
              id="sub"
              className="form-control"
              value={updatestudent.sub}
              onChange={handleChange}
              style={{color: updatestudent.sub > 100 ? 'red' : (updatestudent.sub > 35 ? 'green' : 'red')}}            />
            {updatestudent.sub>100?<p style={{color:"red"}}>Marks must be less than 100</p>:null}
          </div>
          <div className="mb-3">
            <label htmlFor="sub" className="form-label">Math</label>
            <input
              type="text"
              id="m1"
              className="form-control"
              value={updatestudent.m1}
              onChange={handleChange}
              style={{color: updatestudent.m1 > 100 ? 'red' : (updatestudent.m1 > 35 ? 'green' : 'red')}}            />
                {updatestudent.m1>100?<p style={{color:"red"}}>Marks must be less than 100</p>:null}
          </div>
          <div className="mb-3">
            <label htmlFor="sub" className="form-label">Physics</label>
            <input
              type="text"
              id="m2"
              className="form-control"
              value={updatestudent.m2}
              onChange={handleChange}
              style={{color: updatestudent.m2 > 100 ? 'red' : (updatestudent.m2 > 35 ? 'green' : 'red')}}            />
                {updatestudent.m2>100?<p style={{color:"red"}}>Marks must be less than 100</p>:null}
          </div>
          <div className="mb-4">
            <label htmlFor="sub" className="form-label">Chemistry</label>
            <input
              type="text"
              id="m3"
              className="form-control"
              value={updatestudent.m3}
              onChange={handleChange}
              style={{color: updatestudent.m3 > 100 ? 'red' : (updatestudent.m3 > 35 ? 'green' : 'red')}}
            />
                {updatestudent.m3>100?<p style={{color:"red"}}>Marks must be less than 100</p>:null}
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Update Student</button>
        </form>
      </div>
    </div>
  );
}
