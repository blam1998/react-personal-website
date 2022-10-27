import './user.css';


function user(){
    return(
        <div className = "intro">
            <div className = "userName">
                Bao Lam Le H.
            </div>
            <div className = "userInfo">
                <nobr>
                    <a className = "userGithub" href = "https://github.com/blam1998" class = "fa fa-github">
                    </a>
                    <a className = "userLinkedin" href = "https://www.linkedin.com/in/bao-lam-le-431175225/details/projects/" class = "fa fa-linkedin-square">
                    </a>
                </nobr>
            </div>
        </div>
        )
}

export default user;