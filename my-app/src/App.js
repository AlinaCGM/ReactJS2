import React from "react";
import "./styles.css";
import Employee from "./Employee"

const employee = [
  {name: "Alina", 
    id: "ABC"
  },
  {name: "dINU", 
    id: "DEF"
  }
];

export default function App() {

  const firstEmployee = employee[0];
  return (
    <div className ="App">
    
         <Employee {...firstEmployee}/>
    </div>
  );

}

