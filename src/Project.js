import "./Project.css"
import HorizontalSlider from './HorizontalSlider';
import {InprogressStorage, CompletedStorage} from './ItemFactory';


function Project(){
    return(
        <div>
            <div className = "Horizontal-Slider">
                <h1 className = "Horizontal-Slider-Title">
                Projects I'm Working On
                </h1>
                <HorizontalSlider ItemBoxArray = {InprogressStorage}/>
            </div>
            <div className = "Horizontal-Slider">
                <h1 className = "Horizontal-Slider-Title">
                Projects I've Done
                </h1>
                <HorizontalSlider ItemBoxArray = {CompletedStorage}/>
            </div>
        </div>
    )
}


export default Project;