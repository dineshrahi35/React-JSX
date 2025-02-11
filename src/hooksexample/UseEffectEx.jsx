// import React, { useState, useEffect } from 'react';

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setCount(200);
//     }, 5000);

//     document.title = count;

   
//     return () => clearTimeout(timeout);
//   }, [count]); 

//   return (
//     <div>
//       <h1>UseEffectEx</h1>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// export default UseEffect;

//! API
import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  // Effect for updating the count and document title
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(200);
    }, 5000);

    document.title = count;

    return () => clearTimeout(timeout);
  }, [count]);

  // Effect for fetching users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="parent">
      <h1>UseEffect Example</h1>
      <h1>Count: {count}</h1>
      <div>
        {users.map((user, index) => (
          <React.Fragment key={index}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UseEffectExample;
