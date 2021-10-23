import React from "react";
import Input from "../generic/Input";

class TimeInput extends React.Component {
    render() {
        const { hoursVal, minutesVal, secondsVal } = this.props;
        return (
            <React.Fragment>
                <Input placeholder="HH" value={hoursVal} />
                <Input placeholder="MM" value={minutesVal} />
                <Input placeholder="SS" value={secondsVal} />
            </React.Fragment>
        )
    }
}

export default TimeInput;
