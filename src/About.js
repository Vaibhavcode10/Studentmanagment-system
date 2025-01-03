import React from 'react'
import usercontext from './Studentdataprovider';
export default function About() {
  const satetvalue=React.useContext(usercontext);
  return (
 <>  
  <h1>hello {satetvalue}</h1>
 </>
  )
}
