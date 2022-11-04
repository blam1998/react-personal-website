import './user.css';
import './PopupModal.css';
import {Component} from 'react';
import PopupModal from "./PopupModal"

function Resume(){
    return(
        <div className = "User-Resume">
            <img id = "Resume-Image" src = "./Resume.jpg" alt = "Tommy gae"></img>
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
                            <a  href = "https://github.com/blam1998" className = "fa fa-github" title = "Github">
                            </a>
                            <a  href = "https://www.linkedin.com/in/bao-lam-le-431175225/details/projects/" className = "fa fa-linkedin-square" Title = "Linkedin">
                            </a>
                            <a className = "fa fa-file" href = "#" onClick = {this.handleClick} title = "Resume"></a>
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