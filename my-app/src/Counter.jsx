import React, {useEffect, useState} from "react";

const Counter = () => {
    const [count , setCount] = useState(0) ;

    useEffect(() => {}, []);
    
    return(
        <div>
            <h6> Counter</h6>
            <p>The count is: {count}</p>
            <button onClick ={() => setCount(count+1)}>Increment</button> <br/>
            <button onClick ={() => setCount(count-1)}>Decrement</button>
        </div>
    );
};
export default Counter;

























// const Counter = () => {
//     const [count , setCount] = useState(0) ;

//    
    
//     return(
//         <React.Fragment>
//             <p>The count is: {count}</p>
//             <button onClick ={() => setCount(count+1)}>Increment</button> <br/>
//             <button onClick ={() => setCount(count-1)}>Decrement</button>
//         </React.Fragment>
//     );
// };
// export default Counter;