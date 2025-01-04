import React from "react";
import { useStudent } from "./Studentcontextprovider";
import UpdateStudent from "./UpdateStudent";

export default function StudentDeatilsView() {
  const { studentlist, setstudentlist, currentindex, setcurrentindex } =
    useStudent();
  const student = currentindex !== null ? studentlist[currentindex] : null;
  const temp = 3;
  return (
    <>
      <div className="card ">
        <div className="card-header">Student Details</div>
        <div className="card-body">
          {student ? (
            <div>
              <table
                className="table table-bordered"
                style={{ tableLayout: "fixed", width: "100%" }}
              >
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td
                      style={{
                        color: UpdateStudent.name.length > 10 ? "green" : "red"
                      }}
                    >
                      {student.name}
                    </td>
                  </tr>
                  <tr>
                    <th>Roll</th>
                    <td style={{ color: student.roll > 50 ? "red" : "green" }}>
                      {student.roll}
                    </td>
                  </tr>
              
                  <tr>
                    <th>Math</th>
                    <td style={{ color: student.m1 > 100 ? "red" : "green" }}>
                      {student.m1}
                    </td>
                  </tr>
                  <tr>
                    <th>Physics</th>
                    <td style={{ color: student.m1 > 100 ? "red" : "green" }}>
                      {student.m2}
                    </td>
                  </tr>
                  <tr>
                    <th>Chemistry</th>
                    <td style={{ color: student.m1 > 100 ? "red" : "green" }}>
                      {student.m3}
                    </td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td style={{ color: student.m1 > 100 ? "red" : "green" }}>
                      {
                        (student.total =
                          Number(student.m1) +
                          Number(student.m2) +
                          Number(student.m3))
                      }
                    </td>
                  </tr>
                  <tr>
                    <th>Percentage</th>
                    
                    <td style={{ color: student.percentage > 100 || student.percentage < 35 ? "red" : "green" }}>
                    {(student.percentage = Number(student.total) / 3).toFixed(2)}%
                    </td>
                  </tr>
                  <tr>
                    <th>Result:</th>
                    <td  style={{ color: student.percentage > 35 && student.m1> 35 && student.m2>35  && student.m3 > 35 ?  "green" : "red" }}>
                      {student.m1> 35 && student.m2>35  && student.m3 > 35 ? "Pass" : "Fail"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p>Click on a student to view details</p>
          )}
        </div>
      </div>
    </>
  );
}
