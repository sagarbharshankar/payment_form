import React, {Component} from 'react';

class Text extends Component {

    constructor(props){
        super(props);
        this.state = {
            isFieldValid: true,
            text: ''
        }
    }

    handleFieldChange = (evt) => {
        let val = evt.target.value;
        let isValid = this.props.validation(val);
        this.setState(
                {
                        text: val,
                        isFieldValid: isValid
                    }
        );
        return this.props.onChangeText(isValid, this.props.name, val);
    }

    render() {
        return <input type={this.props.type} name={this.props.name} onChange={this.handleFieldChange} style={{borderColor: this.state.isFieldValid ? 'black' : 'red'}}/>
    }

}


export default Text;