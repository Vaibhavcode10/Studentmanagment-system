 import react,{ createContext,useState,useContext } from "react";
import { use } from "react";

 const studentcontext=createContext();
 export const useStudent=()=>
 {
  return  useContext(studentcontext);
 }
 const dummydata=[
  {name:'vaibhav',roll:10,sub:92,m1:"88",m2:"99",m3:"76",total:"",percentage:90},
  {name:'sagar',roll:11,sub:82,m1:"78",m2:"76",m3:"86",total:"",percentage:90},
  {name:'pratik',roll:12,sub:87,m1:"88",m2:"82",m3:"72",total:"",percentage:90},
  {name:'prem',roll:13,sub:76,m1:"87",m2:"97",m3:"95",total:"",percentage:90},
];
   
  export default function Studentcontextprovider({children})
  {
    const [studentlist,setstudentlist]=useState(dummydata);
    const [currentindex,setcurrentindex]=useState(1);
    const [searcvalue,setsearchvalue]=useState('');
    const [update,setisupdate]=useState(false);
    
    return(
      <studentcontext.Provider value={{studentlist,setstudentlist,currentindex,setcurrentindex,searcvalue,setsearchvalue,setisupdate}}>
      {children}
      </studentcontext.Provider>
    )
  }
