import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Time = styled.div`
    font-size: 100px;
`;

class DisplayTime extends React.Component {
  static transformToDisplayString(number) {
    let numString = number.toString();

    if (numString.length < 2) {
      numString = "0" + numString;
    } else if (numString.length >= 2) {
      throw new Error ("invalid value for time segment")
    }
    
    return numString;
  }
  render() {
    const { hours, minutes, seconds } = this.props;
    return (
        <Time>
            {DisplayTime.transformToDisplayString(hours)}:
            {DisplayTime.transformToDisplayString(minutes)}:
            {DisplayTime.transformToDisplayString(seconds)}
        </Time>
    );
  }
}
DisplayTime.propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
}
DisplayTime.defaultProps = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

export default DisplayTime;