import React, { useState, useEf } from "react";
import { useStudent } from "./Studentcontextprovider";
import UpdateStudent from "./UpdateStudent";
import { use } from "react";
import StudentDeatilsView from "./StudentDeatilsView";

export default function StudentListView() {
  const { studentlist, setstudentlist, currentindex, setcurrentindex } =
    useStudent();

  const handleDelete = (index) => {
    const newStudentList = studentlist.filter((_, i) => i !== index);
    setstudentlist(newStudentList);
    alert("Student record deleted");
  };
  const [toggle, settoggle] = useState(false);
  const changetoggle=()=>
  {
   settoggle(true);
  }
  const changetoggle2=()=>
  {
    settoggle(false)
  }
  if (currentindex === null) {
    return <div className="container mt-5">Select a student to update.</div>;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          {studentlist !== "" ? (
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Student List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {studentlist.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "5px 0",
                          borderBottom: "1px solid #ddd"
                        }}
                      >
                        <p
                          style={{ cursor: "pointer", margin: 0 }}
                          onClick={() => {
                            setcurrentindex(index);
                            changetoggle();
                          }}
                        >
                          {item.name}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginLeft: "auto"
                          }}
                        >
                          <button
                            onClick={() => handleDelete(index)}
                            className="btn btn-danger btn-sm"
                            style={{ flex: 1 }}
                          >
                            Delete
                          </button>

                          <button
                            className="btn btn-primary btn-sm"
                            style={{ flex: 1 }}
                            onClick={() => {
                              setcurrentindex(index);
                              changetoggle2();
                            }}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No student data to display</p>
          )}
        </div>
        <div className="col-md-6">
       {toggle?<StudentDeatilsView/>:<UpdateStudent />}
        </div>
      </div>
    </>
  );
}
