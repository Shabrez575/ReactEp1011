// Function Based Component.
/*
import Users from "./Users";
import UsersClass from "./UsersClass";

const About = () => {
  return (
    <div className="about">
      <h1>Welcome in About Page!</h1>
      <Users name = {"Md Shabrez Akhtar(fun)"} location = {"Biharsharif, Bihar(fun)"} />
      <UsersClass name = {"Jimmy Sham(cls)"} location = {"Street 16H-A1, Melbourne(cls)"} />
    </div>
    );
};
export default About;
*/
// Class Based Component.
import UsersClass from "./UsersClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // this is place where we placed API calls...
  //  console.log("Parent Did Mount");
  }
  render() {
  //  console.log("Parent Render");
    return (
      <div className="about">
        <h1>Welcome in About Page!</h1>
        {/* When we use two same child component or two  different child component then how the React life cycle method will work.Here we are creating two instances of same class and passing different props here.
        1 - Parent Constructor
        2 - Parent Render
        3 - cls - 1 Constructor
        4 - cls - 1 Render
        5 - cls - 2 Constructor 
        6 - cls - 2 Render
        7 - cls - 1 Mount
        8 - cls - 2 Mount
        9 - Parent Did Mount.

        */}
        <UsersClass
          name={"Jimmy Sham(cls - 1)"}
          location={"Street 16H-A1, Melbourne(cls)"}
        />

        {/* <UsersClass
          name={"Jimmy Sham(cls - 2)"}
          location={"Street 16H-A1, Melbourne(cls)"}
        /> */}
      </div>
    );
  }
}
export default About;
