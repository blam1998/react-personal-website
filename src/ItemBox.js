import './ItemBox.css'
import {Component} from 'react';

function GetShortDescription(props){
    return(
        <div>
            {props.ShortDescription.map((element, index) => {
                return(
                    <li key = {"Child" + index} className = "ItemBox-List">
                        {element}
                    </li>
                )
            })}
        </div>
    )
}

class ItemBox extends Component{
    constructor(props){
        /*
        Props: {
            ProjectName
            Date
            Summary
            ShortDescription
            Id
            Github
            Video --> Soon
        }
        */
        super(props);
        this.Pause = this.Pause.bind(this);
    }

    Pause(ref){
        console.log("Out");
        var iframe = document.querySelector( 'iframe');
        var video = document.querySelector( 'video' );
        if ( iframe !== null ) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if ( video !== null ) {
            video.pause();
        }
        
    }

    render(){
        return(
            <div className = "ItemBox-Outer-Frame">
                <div className = "ItemBox-Inner-Frame">
                    <div className = "ItemBox-Project-Name">
                        {this.props.ProjectName}
                        <a className = "fa fa-github" target = "_blank" href = {this.props.Github} title = "Github"></a>
                    </div>
                    <div className = "ItemBox-Date">
                        <b>Date: </b>{this.props.Date}
                    </div>
                    <div className = "ItemBox-Summary">
                        <b>Summary: </b>{this.props.Summary}
                    </div>
                    <div className = "ItemBox-ShortDescription">
                        <GetShortDescription ShortDescription = {this.props.ShortDescription}/>
                    </div>
                    <div className = "ItemBox-Youtube-Div">
                        <video id = {"Video+" + this.props.Id} className = "ItemBox-Video" controls>
                            <source src = "testVid.mp4" type = "video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        )
    }
}

const project1 = {
    Id: "1",
    ProjectName: "Discord Bot",
    Date: "06/2022 - 06/2022",
    Summary: "A short project to get used to interacting with APIs, Scalable Databases, and SQL.",
    ShortDescription: ["1","2","3","4"]
}

export{ItemBox as ItemBox, project1 as project1};