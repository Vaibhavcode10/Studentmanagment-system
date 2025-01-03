import React, { createContext, useContext, useState } from 'react';

const StudentsContext = createContext();

export const useStudents = () => useContext(StudentsContext);

const dummyStudents = [
  { roll: 101, name: 'Samarth', marks: 85 },
  { roll: 102, name: 'Rakesh', marks: 90 },
  { roll: 103, name: 'Sahil', marks: 78 },
];

export function StudentsProvider({ children }) {
  const [studentList, setStudentList] = useState(dummyStudents);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
    const [updatestudent, setupdatestudent] = React.useState({ name: '', roll: '', sub: '', percentage: '' });
  return (
    <StudentsContext.Provider
      value={{
        studentList,
        selectedStudentIndex,
        setSelectedStudentIndex,
        updatestudent,
        setupdatestudent
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
}