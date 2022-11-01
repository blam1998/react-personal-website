import "./PopupModal.css"
import {Component} from 'react';


class PopupModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState=>({
            isOpen : !prevState.isOpen
        }));

        if (this.isOpen){
            document.getElementById("Popup-Modal").style.display = "block";
        }
        else{
            document.getElementById("Popup-Modal").style.display = "none";
        }
    }

    render(){
        return(
            <div id = "Popup-Modal" onClick = {this.handleClick}>
                <div className = "Popup-Modal-Inner">
                    <span className = "Popup-Modal-Close" href = "#" onClick = {this.handleClick}>X</span>
                    {this.props.Data}
                </div>
            </div>
        )
    }
}

export default PopupModal;