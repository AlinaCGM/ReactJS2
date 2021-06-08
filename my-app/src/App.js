import React, {useState} from "react";
import Counter from "./Counter";
import "./styles.css";


function App() {
  return (
    <div className = "App">
      <header className="App-header">
        <h2>Our App</h2>
        <Counter/>
      </header>
    </div>
  )
}

export default App;















// export default function App() {

//   const [loggedIn, setLoggedIn] = useState(true);
//   return (
//     <div className ="App">
//     <h1>Welcome back</h1>
//     <button onClick = {() => setLoggedIn(!loggedIn)}> 
//     {loggedIn ? "Log out" : "Log in"}
//     </button>
//     { loggedIn ? (
//       <h2> Hello Alina</h2>
//      ) : (
//        <div>
//          <h2>Please log in</h2>
//         </div>
//      )} 
         
//     </div>
//   );

// }







// const employees = ["Alina", "Dinu"];
// return (
//   <div className ="App">
//    {employees && employees.length > 0 && (
//      <div> 
//        <h3> Employee list: </h3>
//        {employees.map((employee) => (
//          <h4> {employee} </h4>
//        ))}
//      </div>
//    )}
       
//   </div>
// );

// }