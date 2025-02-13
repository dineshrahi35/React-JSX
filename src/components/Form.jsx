// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     gender: '',
//     address: '',
//     country: '',
//     file: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }} />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }} />
//       </div>
//       <div>
//         <label>Gender:</label>
//         <div>
//           <label>
//             <input type="radio" name="gender" value="male" onChange={handleInputChange} required /> Male
//           </label>
//           <label>
//             <input type="radio" name="gender" value="female" onChange={handleInputChange} required /> Female
//           </label>
//           <label>
//             <input type="radio" name="gender" value="other" onChange={handleInputChange} required /> Other
//           </label>
//         </div>
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }}></textarea>
//       </div>
//       <div>
//         <label htmlFor="file">File:</label>
//         <input type="file" id="file" name="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
//       </div>
//       <div>
//         <label htmlFor="country">Country:</label>
//         <select id="country" name="country" value={formData.country} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }}>
//           <option value="">Select a country</option>
//           <option value="usa">USA</option>
//           <option value="india">India</option>
//           <option value="uk">UK</option>
//           <option value="australia">Australia</option>
//         </select>
//       </div>
//       <button type="submit" style={{ width: '100%', padding: '10px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    country: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data to the parent
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }} />
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <label>
            <input type="radio" name="gender" value="male" onChange={handleInputChange} required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={handleInputChange} required /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" onChange={handleInputChange} required /> Other
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }}></textarea>
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select id="country" name="country" value={formData.country} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '10px' }}>
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="india">India</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
        </select>
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Submit
      </button>
    </form>
  );
};

export default Form;
