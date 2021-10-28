import React from "react";
import { globalPropTypes } from "../../utils/globalPropTypes";


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
    totalRounds: globalPropTypes.totalRounds,
    currRound: globalPropTypes.currRound,
    isRest: globalPropTypes.isRest
}
DisplayRounds.defaultProps = {
    totalRounds: 0,
    currRound: 0,
    isRest: false
}

export default DisplayRounds;