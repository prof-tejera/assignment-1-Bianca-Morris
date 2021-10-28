import PropTypes from "prop-types";

export const globalPropTypes = {
    // Styling Props
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),

    // HTML Attributes
    buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
    disabled: PropTypes.bool,
    inputType: PropTypes.oneOf(["text", "number", "submit"]),
    inputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.string,
    name: PropTypes.string,
    
    
    
    
    // React Props
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    // Event Handlers
    onClick: PropTypes.func,
    onChange: PropTypes.func,


    // Timer-Specific Props
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    totalRounds: PropTypes.number,
    currRound: PropTypes.number,
    isRest: PropTypes.bool,

};