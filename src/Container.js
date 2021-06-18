import React, {Component} from 'react';
import LabelTextWrapper from "./LabelTextWrapper";


class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            cardHolderData: this.props.cardHolderData,
            enableSubmit: false
        }
    }

    validateAndSubmit = (isValid, fieldName, val) => {

        let tempDataArr = this.state.cardHolderData;
        let tempCardHolder = tempDataArr.filter(e => e.txtName === fieldName);
        tempCardHolder[0].val = val;
        tempCardHolder[0].isValid = isValid;

        this.setState({
            cardHolderData: tempDataArr
        })
        this.setState({
            enableSubmit: tempDataArr.filter(e => e.isValid === true).length === this.state.cardHolderData.length
        })
    }

    submitForm = () => {
        const data = this.state.cardHolderData;
        console.log(JSON.stringify({ data }));
        return false;
    }

    render() {
        return (
            <div style={{ border:'thin solid', padding:'1rem', align:'center', display:'flex', flexDirection:'column'}}>
                <div style={{ border:'thin solid', width:'25rem', float:'center'}}>
                    <h1>DNB</h1>
                    <LabelTextWrapper cardHolderData={this.props.cardHolderData} onChangeText={this.validateAndSubmit} />
                    <button onClick={this.submitForm} disabled={!this.state.enableSubmit}>Next</button>
                </div>
            </div>
        );
    }
}

export default Container;