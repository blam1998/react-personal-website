import './user.css';
import './PopupModal.css';
import {Component} from 'react';
import PopupModal from "./PopupModal"

function Resume(){
    return(
        <div className = "User-Resume">
            <img id = "Resume-Img" src = "test.jpg"></img>
        </div>
    )
}

class user extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        document.getElementById("Popup-Modal+Resume").style.display = "block";
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
                <div id = "Resume-Popup">
                    <PopupModal Data = {<Resume/>} Id = "Resume"/>
                </div>
            </div>
            )
    }
}

export default user;