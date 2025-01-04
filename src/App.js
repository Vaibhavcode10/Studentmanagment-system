import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentListView from "./StudentListView";
import Studentcontextprovider from "./Studentcontextprovider";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";
import Navigation from "./Navigation";
import Deletstudent from "./Deletstudent";

export default function App() {
  return (
 
      <Studentcontextprovider>
        <div className="container-fluid">
          <div className="row min-vh-100 p-0">
            
            <div className="col-md-2 bg-dark text-white ">
              <Navigation />
            </div>

            {/* Main content */}
            <div className="col-md-10 bg-light ">
              <div className="container-fluid py-4 ">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <h1
                          className="text-center my-4"
                          style={{ fontFamily: "monospace" }}
                        >
                          Student Management System
                        </h1>
                        <StudentListView />
                      </>
                    }
                  />
                  <Route path="/create" element={<CreateStudent />} />
                  <Route path="/update" element={<UpdateStudent />} />
                  <Route path="/delet" element={<Deletstudent />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Studentcontextprovider>
  );
}
