import './HorizontalSlider.css'
import {Component} from 'react';
import {project1, ItemBox} from "./ItemBox";
import {ItemBoxFrame} from './ItemBoxFrame';
import {InprogressStorage} from './ItemFactory';

function HorizontalSliderDataExtraction(props){
    /*
    Props: {
        ItemBoxArray
    }
    */
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
    /*
    Props: {
        ItemBoxArray
    }
    */
    return(
        <div>
            <div className = "HorizontalSlider-Outer-Frame">
                <HorizontalSliderDataExtraction ItemBoxArray = {props.ItemBoxArray}/>
            </div>
        </div>
    )
}



export default HorizontalSlider;