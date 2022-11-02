import './HorizontalSlider.css'
import {Component} from 'react';
import {project1, ItemBox} from "./ItemBox";
import {ItemBoxFrame} from './ItemBoxFrame';

function HorizontalSliderDataExtraction(props){

    return(
        <ul className = "HorizontalSlider-Inner-Frame">
            {props.ItemBoxArray.map((element,index) => {
                return(
                    <ul className = "Each-ItemBox" key = {"ItemBox" + index}>{element}</ul>
                )
            })}
        </ul>
    )
}

function HorizontalSlider(props){
    return(
        <div>
            <div className = "HorizontalSlider-Outer-Frame">
                <HorizontalSliderDataExtraction ItemBoxArray = {element1}/>
            </div>
        </div>
    )
}

let element1 = []
element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {project1.ShortDescription}/>}
Id = {project1.Id} Title = "kekw"/>);

element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {["kekw","poggers"]} />}
Id = {"2"} Title = {project1.ProjectName}/>);

element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {project1.ShortDescription}/>}
Id = {project1.Id} Title = "kekw"/>);

element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {["kekw","poggers"]} />}
Id = {"2"} Title = {project1.ProjectName}/>);

element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {["kekw","poggers"]} />}
Id = {"2"} Title = {project1.ProjectName}/>);
element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {["kekw","poggers"]} />}
Id = {"2"} Title = {project1.ProjectName}/>);

element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {["kekw","poggers"]} />}
Id = {"2"} Title = {project1.ProjectName}/>);
element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {["kekw","poggers"]} />}
Id = {"2"} Title = {project1.ProjectName}/>);
element1.push(<ItemBoxFrame ItemBox = {<ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {["kekw","poggers"]} />}
Id = {"2"} Title = {project1.ProjectName}/>);






export default HorizontalSlider;