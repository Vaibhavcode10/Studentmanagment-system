import React from "react";
import { useStudent } from "./Studentcontextprovider";
export default function CreateStudent() {
  const { studentlist, setstudentlist, currentindex, setcurrentindex } =
    useStudent();
  const [newstudent, setnewstudent] = React.useState({
    name: "",
    roll: "",
    sub: "",
    percentage: ""
  });
  const handelchange = (e) => {
    setnewstudent({ ...newstudent, [e.target.id]: e.target.value });
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    setstudentlist([...studentlist, newstudent]);
    setnewstudent({
      name: "",
      roll: "",
      sub: "",
      percentage: "",
      m1: "",
      m2: "",
      m3: ""
    });
  };
  return (
    // lets add more data
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Create Student</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter Name"
              value={newstudent.name}
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="roll" className="form-label">
              Roll
            </label>
            <input
              type="number"
              id="roll"
              className="form-control"
              placeholder="Enter Roll Number"
              value={newstudent.roll}
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
            English
            </label>
            <input
              type="number"
              id="sub"
              className="form-control"
              placeholder="Enter Marks"
              value={newstudent.sub}
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
          Math
            </label>
            <input
              type="number"
              id="m1"
              className="form-control"
              placeholder="Enter Marks"
              value={newstudent.m1}
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
           Physics
            </label>
            <input
              type="number"
              id="m2"
              className="form-control"
              placeholder="Enter Marks"
              value={newstudent.m2}
              onChange={handelchange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="percentage" className="form-label">
             Chemistry
            </label>
            <input
              type="number"
              id="m3"
              className="form-control"
              placeholder="Enter Enter Marks"
              value={newstudent.m3}
              onChange={handelchange}
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handelsubmit}
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
