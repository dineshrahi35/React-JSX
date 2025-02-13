// import React from 'react'
// import { Link, outlet } from 'react-router-dom'
// const Profile = () => {
//   return (
//     <div style={{width:"100%,height:100vh,background:"bisque"}}>Profile
//         <hr />
//         <br />
//         <hr />
//         <Link to ="/profile/myaccount">My Accounts</Link> <br   /><br/>
//         <Link to ="/profile/settings">My Accounts</Link> <br   /><br/>
//         <outlet/>
//     </div>
//   )
// }

// export default Profile
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ width: "100%", height: "100vh", background: "bisque" }}>
      <h1>Profile</h1>
      <hr />
      <br />
      <hr />
      <Link to="/profile/myaccount">My Account</Link>
      <br />
      <br />
      <Link to="/profile/settings">Settings</Link>
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default Profile;
