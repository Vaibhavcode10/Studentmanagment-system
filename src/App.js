import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentListView from "./StudentListView";
import Studentcontextprovider from "./Studentcontextprovider";
import DeatilsView from "./StudentDeatilsView";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";
import Navigation from './Navigation'
import Deletstudent from "./Deletstudent";

export default function App() {
  return (
    <>
    <Navigation/>
    <Studentcontextprovider>
     <Routes>
          <Route
            path="/"
            element={
              <div className="container-fluid">
                <h1 className="text-center my-4">Student Management System</h1>
                <div className="row">
                  <div className="col-md-6">
                    <StudentListView />
                  </div>
                  <div className="col-md-6">
                    <DeatilsView />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update" element={<UpdateStudent />} />
          <Route path="/delet" element={<Deletstudent />}/>
        </Routes>
    </Studentcontextprovider>

    </> 
     );
}
