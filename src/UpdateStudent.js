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
    setupdatestudent({ name: '', roll: '', sub: '', percentage: '' });
    setcurrentindex(0);  
  };

  if (currentindex === null) {
    return <div className="container mt-5">Select a student to update.</div>;
  }

  return (
    <div className="container mt-0">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Update Student</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={updatestudent.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="roll" className="form-label">Roll</label>
            <input
              type="number"
              id="roll"
              className="form-control"
              value={updatestudent.roll}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sub" className="form-label">Subject</label>
            <input
              type="text"
              id="sub"
              className="form-control"
              value={updatestudent.sub}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="percentage" className="form-label">Percentage</label>
            <input
              type="number"
              id="percentage"
              className="form-control"
              value={updatestudent.percentage}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Update Student</button>
        </form>
      </div>
    </div>
  );
}
