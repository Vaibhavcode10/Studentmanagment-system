 import react,{ createContext,useState,useContext } from "react";
import { use } from "react";

 const studentcontext=createContext();
 export const useStudent=()=>
 {
  return  useContext(studentcontext);
 }
 const dummydata=[
  {name:'vaibhav',roll:101,sub:"math",percentage:90},
  {name:'sagar',roll:102,sub:"english",percentage:80},
  {name:'pratik',roll:104,sub:"history",percentage:70},
  {name:'prem',roll:105,sub:"french",percentage:70},
];
   
  export default function Studentcontextprovider({children})
  {
    const [studentlist,setstudentlist]=useState(dummydata);
    const [currentindex,setcurrentindex]=useState(0);
    const [searcvalue,setsearchvalue]=useState('');
    const [update,setisupdate]=useState(false);
    
    return(
      <studentcontext.Provider value={{studentlist,setstudentlist,currentindex,setcurrentindex,searcvalue,setsearchvalue,setisupdate}}>
      {children}
      </studentcontext.Provider>
    )
  }
