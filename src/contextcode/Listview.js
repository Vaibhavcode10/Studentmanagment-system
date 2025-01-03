'use client';

import React from 'react';
import { useStudents } from './StudentsContext';

export default function StudentListView() {
  const { studentList, setSelectedStudentIndex } = useStudents();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Student List</h5>
        <ul className="list-group">
          {studentList.map((student, index) => (
            <li
              key={student.roll}
              className="list-group-item d-flex justify-content-between align-items-center"
              onClick={() => setSelectedStudentIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              <span>
                <strong>{student.name}</strong> (Roll: {student.roll})
              </span>
              <span className="badge bg-primary">{student.marks} Marks</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}