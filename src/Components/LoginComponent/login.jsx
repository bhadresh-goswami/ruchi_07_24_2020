import React, { Component } from 'react';

class Login extends Component {

    //part-1 logic
    //function constructior inbuild method life cycle methods
    constructor(props) {
        super(props);//constructor from Component of React
        this.state = {
            username:"",
            password:"",
            IsDisplay:false,
            displayData:<h3>no data</h3>
        };
        
    }

    setUserName(elementRef) {
        //let uname = elementRef.target.value;    
        //console.log(uname);
        this.setState({username:elementRef.target.value});
        console.log(this.state);
    }
    setUserPassword(elementRef) {
        //let uname = elementRef.target.value;    
        //console.log(uname);
        this.setState({password:elementRef.target.value});
        console.log(this.state);
    }
    onClick()
    {
        // console.log('Button Clicked!')
        let display = this.state.username +"/"+this.state.password;
        this.setState({displayData:display});
        // this.setState({IsDisplay:true});
    }
    //part-2 UI
    render() {
        //coding jsx

        // let displayData = () => {
        //     let isD = this.state.IsDisplay;
        //     if(isD==true)
        //     {
        //         return <div>{this.state.username}/{this.state.password}</div>   
        //     }
        //     else
        //     return <h4>No Change</h4>
        // }

        return (
            <div>                
                {/* UI or Data */}
                <h1>{this.props.title}</h1>
                <table>
                    <tr>
                        <td>
                            User Name
                        </td>
                        <td>
                            <input type="text" onChange={(elementRef)=>this.setUserName(elementRef)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            User Password
                        </td>
                        <td>
                            <input type="password" onChange={(elementRef)=>this.setUserPassword(elementRef)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>this.onClick()}>Login</button>
                        </td>
                        {this.state.displayData}
                    </tr>
                </table>
            </div>
        );
    }
}

export default Login;