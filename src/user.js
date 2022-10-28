import './user.css';
import {Component} from 'react';


function Resume(){
    return(
        <div>TEST</div>
    )
}

class user extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
        
        if (this.isToggleOn){
            <div><Resume/></div>
        }
        

    }

    render(){
        return(
            <div className = "Intro">
                <div className = "UserName">
                    Bao Lam Le H.
                </div>
                <div className = "UserInfo">
                    <nobr>
                        <a  href = "https://github.com/blam1998" className = "fa fa-github">
                        </a>
                        <a  href = "https://www.linkedin.com/in/bao-lam-le-431175225/details/projects/" className = "fa fa-linkedin-square">
                        </a>
                        <a className = "UserResume" href = "#" onClick = {this.handleClick}>Resume</a>

                    </nobr>
                </div>
            </div>
            )
    }
}

export default user;