'use client';

import React from 'react';
import { useStudents } from './StudentsContext';

export default function StudentDetailsView() {
  const { studentList, selectedStudentIndex } = useStudents();

  const selectedStudent =
    selectedStudentIndex !== null ? studentList[selectedStudentIndex] : null;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Student Details</h5>
        {selectedStudent ? (
          <div>
            <p>
              <strong>Roll:</strong> {selectedStudent.roll}
            </p>
            <p>
              <strong>Name:</strong> {selectedStudent.name}
            </p>
            <p>
              <strong>Marks:</strong> {selectedStudent.marks}
            </p>
          </div>
        ) : (
          <p className="text-muted">Select a student to view details</p>
        )}
      </div>
    </div>
  );
}