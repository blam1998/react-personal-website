import './ItemBox.css'
import {Component} from 'react';

function GetShortDescription(props){
    return(
        <div>
            {props.ShortDescription.map((element, index) => {
                return(
                    <li key = {"Child" + index}>
                        {element}
                    </li>
                )
            })}
        </div>
    )
}

class ItemBox extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "ItemBox-Outer-Frame">
                <div className = "ItemBox-Inner-Frame">
                    <div className = "ItemBox-Project-Name">
                        {this.props.ProjectName}
                    </div>
                    <div className = "ItemBox-Date">
                        {this.props.Date}
                    </div>
                    <div className = "ItemBox-Summary">
                        {this.props.Summary}
                    </div>
                    <div className = "ItemBox-ShortDescription">
                        <GetShortDescription ShortDescription = {this.props.ShortDescription}/>
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