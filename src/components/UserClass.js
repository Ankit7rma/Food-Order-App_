import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.name + 'Child Constructor')
        // this.state={
        //     count:0,
        //     count2:2,
        this.state={
            userInfo:{
                name:'Ankit',
                location:'Jaipur',
                id:'230',
            },
        }
            
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/Ankit7rma');
        const json = await data.json();
        
        this.setState({
            userInfo:json,
        });
        
         // console.log(this.props.name +'Child Component Did Mount')
    }
    
    render(){
        // console.log(this.props.name +'Child Render')
        const {name,location ,avatar_url,id} = this.state.userInfo;
        // const {count,count2} = this.state;
        console.log(this.state)
        return (
            <div>
            <h2>Name: {name} </h2>
        
            <h2>Location: {location} </h2>
            <h2>id: {id} </h2>
            <img src={avatar_url}/>
            {/* <h2>Count: {count}</h2> */}
            {/* <button onClick={()=>{
                this.setState({count:this.state.count+1})
            }}
            >Increase</button>
            <h2>Count2: {count2}</h2> */}
            <h3>Role: Frontend Developer</h3>

        </div>
        )
    }
}

 
export default UserClass;