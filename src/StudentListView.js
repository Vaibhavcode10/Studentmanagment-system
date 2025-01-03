import React, { useState } from "react";
import { useStudent } from "./Studentcontextprovider";

export default function StudentListView() {
  const { studentlist, setstudentlist, currentindex, setcurrentindex } =
    useStudent();

  const handleDelete = (index) => {
    const newStudentList = studentlist.filter((_, i) => i !== index);
    setstudentlist(newStudentList);
  };

  return (
    <>
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
                      onClick={() => setcurrentindex(index)}
                    >
                      {item.name}
                    </p>

                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No student data to display</p>
      )}
    </>
  );
}
