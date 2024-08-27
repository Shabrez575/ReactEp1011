import { useState } from "react";

const Users = (props) => {

  // This is the way to create multiple state variable inside function based component.
  // using setcount1 we are able to update state variable in the funtion based component.
  const [count1,setcount1] = useState(1);
  const [count2] = useState(5438);
  return (
    <div className="user-card">
      {/* This is the way to use state variable inside class based component.  */}
      {/* On click of button here we are able to update count1 value by 1.  */}
      <h3>Serial No: {count1} <button onClick={() => {
      setcount1(count1+1)
      }}>Inc empSeq fun</button></h3>
      <h3>Name:{props.name}</h3>
      <h4>Employee ID: {count2}</h4>
      <h4>Location:{props.location}</h4>
      <h4>Contact: 7456958215</h4>
      <h4>Email ID: mdshabrez1999@gmail.com</h4>

    </div>
  );
};
export default Users;