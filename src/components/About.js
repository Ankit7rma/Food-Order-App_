import React from "react";
import UserClass from "./UserClass.js";

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor")
  }
componentDidMount(){
  console.log('Parent Component did Mount')
}
  render() {
    console.log('Parent Render')
    return (
      <div>
        <UserClass name={"Ankit (Class)"} />
        <UserClass name={"Anuj (Class)"} />
      </div>
    );
  }
}
export default About;
