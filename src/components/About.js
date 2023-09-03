import React from "react";
import UserClass from "./UserClass.js";
import userContext from "./userContext.js"

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor")
  }
componentDidMount(){
  // console.log('Parent Component did Mount')
}
  render() {
    // console.log('Parent Render')
    return (
      <div>
          <h2>User
              <userContext.Consumer>
                {({loggedInUser})=><h2 className="font-bold text-lg">{loggedInUser}</h2>}
              </userContext.Consumer>
          </h2>
        <UserClass name={"Ankit (Class)"} />
        {/* <UserClass name={"Anuj (Class)"} /> */}
      </div>
    );
  }
}
export default About;
