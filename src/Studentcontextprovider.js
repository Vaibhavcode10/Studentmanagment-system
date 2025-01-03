 import react,{ createContext,useState,useContext } from "react";
import { use } from "react";

 const studentcontext=createContext();
 export const useStudent=()=>
 {
  return  useContext(studentcontext);
 }
 const dummydata=[
  {name:'vaibhav',roll:101,sub:92,percentage:90,m1:"88",m2:"99",m3:"76"},
  {name:'sagar',roll:102,sub:82,percentage:80,m1:"78",m2:"76",m3:"86"},
  {name:'pratik',roll:104,sub:87,percentage:70,m1:"88",m2:"82",m3:"72"},
  {name:'prem',roll:105,sub:76,percentage:70,m1:"87",m2:"97",m3:"95"},
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
