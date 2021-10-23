import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  border: 1px solid #121212;
  margin: 20px 0px;
`;

const btnVariantToBgColor = (btnVariant) => {
    
    const bgColorMap = {
        primary: { 
            standard: "blue", 
            hover: "dark blue",
            active: "purple",
            disabled: "grey"
        },
        secondary: { 
            standard: "", 
            hover: "dark blue",
            active: "purple",
            disabled: "grey"
        },
        success: { 
            standard: "blue", 
            hover: "dark blue",
            active: "purple",
            disabled: "grey"
        },
        danger: { 
            standard: "red", 
            hover: "pink",
            active: "burgundy",
            disabled: "grey"
        },
        warning: { 
            standard: "blue", 
            hover: "dark blue",
            active: "purple",
            disabled: "grey"
        }
    }

    const textColorMap = {

    }

}

class Button extends React.Component {
  render() {
    const { type, onClick, disabled, variant, children } = this.props;
    return (
        <button {...{ type, onClick, disabled }}>{children}</button>
    );
  }
}
Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning"]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
Button.defaultProps = {
    type: "button",
    disabled: false,
    variant: "primary",
    children: "Click me"
}

export default Button;
