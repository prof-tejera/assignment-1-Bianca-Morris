import React from "react";
import styled from "styled-components";
import Input from "../generic/Input";

const TimeInputWrapper = styled.div`
    display: flex;
    width: 160px;
    justify-content: space-between;
    margin: 10px 5px;
`;

class TimeInput extends React.Component {
    render() {
        const { hoursVal, minutesVal, secondsVal } = this.props;
        return (
            <TimeInputWrapper>
                <Input placeholder="HH" value={hoursVal} />
                <Input placeholder="MM" value={minutesVal} />
                <Input placeholder="SS" value={secondsVal} />
            </TimeInputWrapper>
        )
    }
}

export default TimeInput;
