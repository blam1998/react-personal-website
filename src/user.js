import './user.css';


function user(){
    return(
        <div className = "Intro">
            <div className = "UserName">
                Bao Lam Le H.
            </div>
            <div className = "UserInfo">
                <nobr>
                    <a className = "UserGithub" href = "https://github.com/blam1998" class = "fa fa-github">
                    </a>
                    <a className = "UserLinkedin" href = "https://www.linkedin.com/in/bao-lam-le-431175225/details/projects/" class = "fa fa-linkedin-square">
                    </a>
                    <a className = "UserResume" href = "#">Resume</a>
                </nobr>
            </div>
        </div>
        )
}

export default user;