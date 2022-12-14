import "./ItemBoxFrame.css"
import {Component} from "react";
import React from 'react';
import PopupModal from './PopupModal';
import {ItemBox} from './ItemBox'
/*
What is in an ItemBox?
Project Name:
Date:
Summary:
Short Description:
*/


class ItemBoxFrame extends Component{
    constructor(props){
        /*
        props = {
            ItemBox
            Id
            Title
            Image
        }
        */
        super(props);
        this.state = {
            isClicked : false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        let suffix = this.props.Id;
        document.getElementById("Popup-Modal+" + suffix).style.display = "block";
    }


    render(){
        return(
            <div className = "ItemBoxFrame">
                <div className = "ItemBox-Open-Frame" onClick = {this.clickHandler}>
                    <img className = "ItemBoxFrame-Image" src = {this.props.Image} title = {this.props.Title}></img>
                </div>
                <PopupModal Data ={this.props.ItemBox} Id = {this.props.Id}/>
                <div id = {"ItemBox+"+this.props.Id} className = "ItemBoxFrame-Title">
                    {this.props.Title}
                </div>

            </div>
        )
    }
}





export {ItemBoxFrame as ItemBoxFrame}