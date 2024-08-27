import React from "react";
class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    // This is the way to create multiple state variable inside class based component.
    this.state = {
      count1: 51,
      count2: 5439,
      userInfo: { name: "Dummy", location: "Default" },
    };
    console.log(props);
    console.log(this.props.name + "Child Constructor");
  }

  // componentDidMount(){
  //   // this is place where we placed API calls...
  //   // console.log(this.props.name + "child Did Mount");
  // }

  // API Calls
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shabrez575");
    const json = await data.json();

    // Update state Variable
    this.setState({
      userInfo: json,
    });

    console.log(json);
    console.log(this.props.name + "child Did Mount");
  }

  // For Update
  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  // For Unmounting
  componentWillUnmount() {
    console.log("Child Component will unmount");
  }

  render() {
    const { count2 } = this.state;
    // destructing the state variable
    const { name, location, avatar_url } = this.state.userInfo;

    //To debug code.
    // debugger;
    console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        {/* This is the way to use state variable inside class based component.  */}

        <img src={avatar_url} className="usr-img" alt="user-img" />
        <h3>
          Serial No. :{this.state.count1}{" "}
          <button
            onClick={() => {
              this.setState({
                count1: this.state.count1 + 2,
              });
            }}
          >
            Inc empId cls
          </button>
        </h3>
        <h3>Name: {name}</h3>
        <h4>Employee ID : {count2}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: +1-123456</h4>
        <h4>Email ID: jimmyshams1999@gmail.com</h4>
      </div>
    );
  }
}
export default UsersClass;
