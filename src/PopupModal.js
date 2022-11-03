import "./PopupModal.css"
import {Component} from 'react';


class PopupModal extends Component{
    constructor(props){
        /*
        props = {
            Id
            Data
        }
        */
        super(props);
        this.state = {
            isOpen : false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){

        /*Only two close events, anything else gets ignored*/
        if (e.target.className == "Popup-Modal" || e.target.className == "Popup-Modal-Close"){
        }
        else{
            return;
        }

        this.setState(prevState=>({
            isOpen : !prevState.isOpen
        }));

        let suffix = this.props.Id;

        if (this.isOpen){
            document.getElementById("Popup-Modal+" + suffix).style.display = "block";
        }
        else{
            document.getElementById("Popup-Modal+" + suffix).style.display = "none";
        }
    }

    render(){
        return(
            <div className = "Popup-Modal" id = {"Popup-Modal+" + this.props.Id} onClick = {(target) => this.handleClick(target)}>
                <div className = "Popup-Modal-Inner">
                    <div className = "Popup-Modal-Content">
                        <span className = "Popup-Modal-Close" href = "#" onClick = {(target) => this.handleClick(target)}>X</span>
                        {this.props.Data}
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupModal;