import React from "react";
import styled from "styled-components";

import { globalPropTypes } from "../../utils/globalPropTypes";
import Input from "../generic/Input";

const TimeInputWrapper = styled.div`
    display: flex;
    width: 160px;
    justify-content: space-between;
    margin: 10px 5px;
`;

const TimeInput = (props) => {
    const { disabled, hoursVal, minutesVal, secondsVal } = props;
    return (
        <TimeInputWrapper>
            <Input placeholder="HH" value={hoursVal} type="number" name="hourInput" {...{ disabled }} />
            <Input placeholder="MM" value={minutesVal} type="number" name="minuteInput" {...{ disabled }} />
            <Input placeholder="SS" value={secondsVal} type="number" name="secondInput" {...{ disabled }} />
        </TimeInputWrapper>
    )
}
TimeInput.propTypes = {
    hoursVal: globalPropTypes.hours,
    minutesVal: globalPropTypes.minutes,
    secondsVal: globalPropTypes.seconds,
    onChange: globalPropTypes.onChange.isRequired,
    disabled: globalPropTypes.disabled
}
TimeInput.defaultProps = {
    disabled: false,
    hoursVal: null,
    minutesVal: null,
    secondsVal: null
}

export default TimeInput;
