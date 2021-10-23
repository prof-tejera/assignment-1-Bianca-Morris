import React from "react";
import PropTypes from "prop-types";


class DisplayRounds extends React.Component {
  render() {
    const { currRound, totalRounds, isRest } = this.props;
    return (
        <div>
            (Round: {currRound}
            {totalRounds > 0 && <span> of {totalRounds}</span>}
            { isRest && <span> - Rest</span>})
        </div>
    );
  }
}
DisplayRounds.propTypes = {
    totalRounds: PropTypes.number,
    currRound: PropTypes.number,
    isRest: PropTypes.bool
}
DisplayRounds.defaultProps = {
    totalRounds: 0,
    currRound: 0,
    isRest: false
}

export default DisplayRounds;