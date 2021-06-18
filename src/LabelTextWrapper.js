import React, {Component} from 'react';
import Label from "./styled/Label";
import Text from "./styled/Text";

class LabelTextWrapper extends Component {

    render() {
        return this.props.cardHolderData.map( (e, index) => {
                return (
                    <div style={{ display:'flex', flexDirection:'row'}} key={index}>
                        <div style={{ width:'50%'}}>
                            <Label>{e.lbl}</Label>
                        </div>
                        <div style={{ width:'50%'}}>
                            <Text name={e.txtName} validation={e.validation} type={e.type} onChangeText={this.props.onChangeText} />
                        </div>
                    </div>
                )
            }
        )
    }

}

export default LabelTextWrapper;