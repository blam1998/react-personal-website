import './user.css';
import {Component} from 'react';


function Resume(){
    return(
        <div className = "User-Resume">
            <img id = "Resume-Img" src = "test.jpg"></img>
        </div>
    )
}

function Test(){
    return(
        <div>test1</div>
    )
}

class user extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
            
        }));
        
        if (this.state.isToggleOn){
            document.getElementById("Resume-Modal").style.display= "block";
        }
        else{
            document.getElementById("Resume-Modal").style.display = "none";
        }
        

    }

    render(){
        return(
            <div className = "Intro">
                <div className = "User-Intro-Frame">
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

                <div id = "Resume-Modal" className = "Modal" onClick = {this.handleClick}>
                    <div className = "Resume-Frame">
                        <span className = "Modal-Close-Button" onClick = {this.handleClick}> X </span>
                        <Resume/>
                    </div>
                </div>
            </div>
            )
    }
}

export default user;